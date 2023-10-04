import React from 'react';

type ProfilePicProps = {
  avatar?: string | null | undefined;
  name?: string;
  email?: number | string;
  nameInitials?: string;
  success: boolean;
};

const ProfilePicCard = ({
  avatar,
  name,
  email,
  nameInitials = 'ME',
  success,
}: ProfilePicProps) => {
  return (
    <div className="flex w-full items-center gap-3">
      {success ? (
        <>
          {avatar ? (
            <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full" />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary-50 p-6">
              <h1 className="text-xl text-primary-600 ">{nameInitials}</h1>
            </div>
          )}

          <div>
            <h5 className="text-sm font-medium">{name}</h5>
            <p className="text-xs font-light">{email}</p>
          </div>
        </>
      ) : (
        <>
          <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200 p-5" />
          <div className="w-full space-y-2">
            <div className="h-4 w-8/12 animate-pulse rounded-sm bg-gray-200" />
            <div className="h-4 w-10/12 animate-pulse rounded-sm bg-gray-200" />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePicCard;
