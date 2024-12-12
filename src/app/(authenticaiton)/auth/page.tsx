import Typography from '@/components/ui/typography';
import { BsSlack } from 'react-icons/bs';

const AuthPage = () => {
  return (
    <div className="min-h-screen p-5 grid text-center place-content-center bg-white text-red-400">
      <div className="max-w-[450px]">
        <div className="flex justify-center items-center gap-3 mb-4">
          <BsSlack size={30} />
          <Typography text="slack-clone" variant="h2" />
        </div>

        <Typography text="Sign in to your slack-clone" className="mb-3" />
      </div>
    </div>
  );
};

export default AuthPage;
