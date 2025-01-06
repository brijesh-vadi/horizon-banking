import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

export default async function Home() {
  const loggedInUser = await getLoggedInUser();
  return (
    <>
      <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
            <HeaderBox
              type='greeting'
              title='Welcome'
              user={loggedInUser?.name}
              subtext='Access and manage your account and transactions.'
            />
            <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1290.35} />
          </header>
        </div>
        <RightSidebar user={loggedInUser} transactions={[]} banks={[{}, {}]} />
      </section>
    </>
  );
}
