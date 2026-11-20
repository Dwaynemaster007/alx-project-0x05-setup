import { ImageProps } from "@/interfaces";
import { useState } from "react";


type WithPrompt = {
  prompt: string;
};

const useFetchData = <T, R extends WithPrompt>() => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);

  const fetchData = async (endpoint: string, body: R) => {
    setIsLoading(true);
    setError(null);
    try {
      const resp = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        throw new Error(result?.error || 'Failed to fetch data');
      }

      setResponseData(result)
      setGeneratedImages((prev) => [...prev, { imageUrl: result?.message, prompt: body?.prompt }]);
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    responseData,
    error,
    fetchData,
    generatedImages
  }
}


export default useFetchData;