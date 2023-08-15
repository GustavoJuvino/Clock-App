import CurrentBackground from './components/CurrentBackground'
import DisplayTime from './components/DisplayTime'
import Infos from './components/Infos'

export default function Home() {
  return (
    <main className="text-white">
      <div className="absolute z-40 h-full w-full bg-black opacity-40" />
      <CurrentBackground />
      <DisplayTime />
      <Infos />
    </main>
  )
}
