import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

// This is a placeholder component. In a real application, you would fetch the results from your backend.
const Results: React.FC = () => {
  const isDeepfake = Math.random() < 0.5; // Simulating a random result
  const confidenceScore = Math.round(Math.random() * 100);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Analysis Results</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center justify-center mb-4">
          {isDeepfake ? (
            <XCircle className="text-red-500 h-16 w-16" />
          ) : (
            <CheckCircle className="text-green-500 h-16 w-16" />
          )}
        </div>
        <p className="text-center text-2xl font-bold mb-2">
          {isDeepfake ? 'Deepfake Detected' : 'Authentic Content'}
        </p>
        <p className="text-center text-gray-600 mb-4">
          Confidence Score: {confidenceScore}%
        </p>
        <div className="border-t pt-4">
          <h3 className="font-bold mb-2">Analysis Details:</h3>
          <ul className="list-disc list-inside">
            <li>Facial inconsistencies: {isDeepfake ? 'Detected' : 'None'}</li>
            <li>Audio-visual sync: {isDeepfake ? 'Mismatched' : 'Matched'}</li>
            <li>Metadata analysis: {isDeepfake ? 'Suspicious' : 'Normal'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Results;