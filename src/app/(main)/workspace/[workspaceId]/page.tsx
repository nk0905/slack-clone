import { getUserData } from '@/actions/get-user-data';
import {
  getCurrentWorkspaceData,
  getUserWorkspaceData,
} from '@/actions/workspaces';
import InfoSection from '@/components/info-section';
import Sidebar from '@/components/sidebar';
import { redirect } from 'next/navigation';
import { Workspace as UserWorkspace } from '@/types/app';

const Workspace = async ({ params }: { params: { workspaceId: string } }) => {
  const resolvedParams = await params;
  const workspaceId = resolvedParams.workspaceId;
  const userData = await getUserData();

  if (!userData) return redirect('/auth');

  const [userWorkspaceData, userWorkspaceError] = await getUserWorkspaceData(
    userData.workspaces!
  );

  const [currentWorkspaceData, currentWorkspaceError] =
    await getCurrentWorkspaceData(workspaceId);

  // const userWorkspaceChannels = await getUserWorkspaceChannels(
  //   currentWorkspaceData.id,
  //   userData.id
  // );

  // if (userWorkspaceChannels.length) {
  //   redirect(
  //     `/workspace/${workspaceId}/channels/${userWorkspaceChannels[0].id}`
  //   );
  // }
  return (
    <>
      <div className="hidden md:block">
        <Sidebar
          currentWorkspaceData={currentWorkspaceData}
          userData={userData}
          userWorksapcesData={userWorkspaceData as UserWorkspace[]}
        />
        <InfoSection
          currentWorkspaceData={currentWorkspaceData}
          userData={userData}
          userWorkspaceChannels={[]}
          currentChannelId=""
        />

        {/* <NoDataScreen
          userId={userData.id}
          workspaceId={currentWorkspaceData.id}
          workspaceName={currentWorkspaceData.name}
        /> */}
      </div>
      <div className="md:hidden block min-h-screen">Mobile</div>
    </>
  );
};

export default Workspace;
