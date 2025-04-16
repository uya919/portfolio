import { FC } from 'react';

const Introduce: FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold border-b pb-2 mb-4">Introduce</h2>
      
      <div className="bg-gray-50 rounded p-4">
        <p className="text-center text-gray-600">간단한 자기소개 및 인삿말</p>
      </div>
    </div>
  );
};

export default Introduce; 