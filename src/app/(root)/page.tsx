import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

export default function Home() {
  const loggedIn = { firstName: 'Brijesh', lastName: 'Vadi', email: 'brijeshvadi@gmail.com' };
  return (
    <>
      <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
            <HeaderBox
              type='greeting'
              title='Welcome'
              user={loggedIn.firstName}
              subtext='Access and manage your account and transactions.'
            />
            <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1290.35} />
          </header>
        </div>
        <RightSidebar user={loggedIn} transactions={[]} banks={[{}, {}]} />
      </section>
    </>
  );
}
