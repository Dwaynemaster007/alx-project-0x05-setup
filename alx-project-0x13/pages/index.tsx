import ImageCard from "@/components/common/ImageCard";
import useFetchData from "@/hooks/useFetchData";
import { ImageProps } from "@/interfaces";
import React, { useState } from "react";

interface GenerateImageResponse {
  message: string;
}

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [selected, setSelected] = useState<ImageProps | null>(null);
  const { isLoading, error, generatedImages, fetchData } = useFetchData<GenerateImageResponse, { prompt: string }>();

  const handleGenerateImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;
    setSelected(null);
    await fetchData("/api/generate-image", { prompt: prompt.trim() });
  };

  // Show the image the user picked, otherwise the newest one
  const current = selected ?? generatedImages[generatedImages.length - 1];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold mb-2 text-center">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Generate stunning images based on your prompts!
        </p>

        <form onSubmit={handleGenerateImage} className="w-full max-w-md">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-60 transition duration-200"
          >
            {isLoading ? "Loading..." : "Generate Image"}
          </button>
        </form>

        {error && <p role="alert" className="mt-4 max-w-md text-center text-red-600">{error}</p>}

        {current && <ImageCard action={() => undefined} imageUrl={current.imageUrl} prompt={current.prompt} />}
      </div>
      {generatedImages.length > 0 && (
        <div>
          <h3 className="text-xl text-center mb-4">Generated Images</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 border max-w-full md:max-w-[1100px] p-2 overflow-y-auto max-h-96">
            {generatedImages.map((image: ImageProps, index) => (
              <ImageCard
                action={() => setSelected(image)}
                imageUrl={image.imageUrl}
                prompt={image.prompt}
                key={index}
                width="w-full"
                height="h-40"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
