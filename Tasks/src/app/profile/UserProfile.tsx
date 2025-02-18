import Image from "next/image";

const UserProfile = ({ user }: { user: any }) => {
  return (
    <div className="bg-gradient-to-t justify-center from-fuchsia-700 to-purple-900 w-1/2 m-auto flex flex-col gap-4 items-center rounded-md min-h-[45rem]">
      <div className="w-44 h-44 rounded-full overflow-hidden shadow-black shadow-2xl flex items-center justify-center bg-blue-200/10">
        <Image
          className="object-cover object-center"
          src="/user.png"
          width={500}
          height={500}
          alt="sumukha"
        />
      </div>

      <h1 className=" font-semibold text-2xl bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent">
        Name: {user.name}
      </h1>
      <h1 className=" font-semibold text-2xl bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent">
        Email: {user.email}
      </h1>
      <h1 className=" font-semibold text-2xl bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent">
        Phone: {user.phone}
      </h1>
      <h1 className=" font-semibold text-2xl bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent">
        Company: {user.company.name}
      </h1>
    </div>
  );
};

export default UserProfile;
