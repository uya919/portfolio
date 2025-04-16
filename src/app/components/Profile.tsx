import { FC } from 'react';

const Profile: FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold border-b pb-2 mb-4">Profile : Title</h2>
      
      <div className="flex space-x-6">
        {/* 프로필 이미지 */}
        <div className="w-32 h-32 border-2 border-gray-300 rounded-full flex items-center justify-center">
          <span className="text-xl">사진</span>
        </div>

        {/* 프로필 정보 */}
        <div className="flex-1 space-y-4">
          {/* I AM */}
          <div>
            <h3 className="font-medium">_I AM</h3>
            <p>이름 : 이프로</p>
            <p>포지션: PM 서비스 기획 / FE Developer(jr)</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium">_Contact</h3>
            <p>Email : leepro@naver.com</p>
            <p>Phone : +082 - 1234-5678</p>
          </div>

          {/* Channel */}
          <div>
            <h3 className="font-medium">_Channel</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-16">SNS :</span>
                <div className="flex-1 h-8 border rounded bg-gray-50"></div>
              </div>
              <div className="flex items-center">
                <span className="w-16">Github :</span>
                <div className="flex-1 h-8 border rounded bg-gray-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 