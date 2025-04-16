import Profile from './components/Profile';
import Introduce from './components/Introduce';
import TechSkill from './components/TechSkill';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Profile />
        <Introduce />
        <TechSkill />
      </div>
    </main>
  );
}
