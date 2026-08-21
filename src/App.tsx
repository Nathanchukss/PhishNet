import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import NewCampaign from './pages/NewCampaign'
import CampaignDetail from './pages/CampaignDetail'
import Caught from './pages/Caught'
import Passed from './pages/Passed'

const DASHBOARD_ROUTES = ['/dashboard', '/campaigns']

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/campaigns/new" element={<Layout><NewCampaign /></Layout>} />
        <Route path="/campaigns/:id" element={<Layout><CampaignDetail /></Layout>} />
        <Route path="/caught" element={<Caught />} />
        <Route path="/passed" element={<Passed />} />
      </Routes>
    </BrowserRouter>
  )
}
