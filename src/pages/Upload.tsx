import React, { useState } from 'react';
import { Upload as UploadIcon } from 'lucide-react';

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement file upload and analysis logic
    console.log('File uploaded:', file);
    // Redirect to results page or show loading state
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload Media for Analysis</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <label htmlFor="file-upload" className="cursor-pointer">
            <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
            <span className="mt-2 block text-sm font-medium text-gray-900">
              {file ? file.name : 'Click to upload or drag and drop'}
            </span>
          </label>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*,video/*"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          disabled={!file}
        >
          Analyze
        </button>
      </form>
    </div>
  );
};

export default Upload;