import Image from 'next/image';
import Container from '../components/Container';
import FriendListItem from '../components/FriendListItem';
import HomeGameList from '../components/HomeGameList';

export default function Home() {
  return (
    <div className="pl-16">
      <div className="font-extrabold text-3xl mb-3 p-3">Home</div>
      {/* OLD HOME HEADER DESIGN
        <div className="flex items-center p-5">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMH08L3N0eWxlPjxnIGlkPSJ1bmFwcHJvdmVkXzFfIj48cGF0aCBpZD0iYmdfMl8iIGZpbGw9IiM2NTY2NjgiIGQ9Ik0wIDBoOTB2OTBIMHoiLz48ZyBpZD0idW5hcHByb3ZlZCIgb3BhY2l0eT0iLjMiPjxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjQ1IiBjeT0iNDguOCIgcj0iMTAiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzggNDEuN2wxNCAxNC4xTTMyLjUgMjMuNWgtNHY0TTI4LjUgNjIuNXY0aDRNMjguNSAzMS44djZNMjguNSA0MnY2TTI4LjUgNTIuMnY2TTU3LjUgNjYuNWg0di00TTYxLjUgNTguMnYtNk02MS41IDQ4di02TTYxLjUgMzcuOHYtNE0zNi44IDY2LjVoNk00Ny4yIDY2LjVoNk0zNi44IDIzLjVoNk00Ny4yIDIzLjVoNE01MS40IDIzLjZsMy41IDMuNU01Ny45IDMwLjFsMy41IDMuNU01MS4yIDIzLjh2M001OC41IDMzLjhoM001MS4yIDMwLjJ2My42aDMuNiIvPjwvZz48L2c+PC9zdmc+"
            width={150}
            height={150}
            className="rounded-full"
          />
          <div className="flex items-center ml-5">
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJNMjggMjRhNCA0IDAgMDEtNCA0SDE0di00aDEwVjRINHYyNGE0IDQgMCAwMS00LTRWNGE0IDQgMCAwMTQtNGgyMGE0IDQgMCAwMTQgNHptLTctN3Y0aC03di00aDN2LTZoLTZ2MTdIN1Y3aDE0djEweiIgZmlsbD0ibm9uZSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNLTUtNWgzOHYzOEgtNXoiLz48L2c+PC9zdmc+"
              width={28}
              height={28}
            />

            <span className="text-3xl font-black pl-3">ollie</span>
          </div>
        </div>
      */}

      <div className="px-3 max-w-5xl">
        <Container title="Friends (?)" href="users/friends">
          <div className="flex shrink-0 overflow-auto">
            { /* 9 items */}
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
          </div>
        </Container>

        <Container title="Continue" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Survival" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Recommended For You" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Fighting & Battle" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Social Hangout" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Team Sports" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Platform Obby" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Tycoon" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Real World Roleplay" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Real World Simulation" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Vehicle Simulation" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Adventure" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Puzzle" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Simulator" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Tycoon & Strategy" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Shooter" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Action" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Favorites" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Sponsored" titlehref href="games/continue">
          <HomeGameList />
        </Container>
      </div>
    </div>
  );
}
