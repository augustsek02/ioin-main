import { Suspense, lazy } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SimpleRouter from './router/SimpleRouter.jsx'

const Home = lazy(() => import('./routes/Home.jsx'))
const Product = lazy(() => import('./routes/Product.jsx'))
const SecurityPolicy = lazy(() => import('./routes/SecurityPolicy.jsx'))
const PrivacyPolicy = lazy(() => import('./routes/PrivacyPolicy.jsx'))

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="grid min-h-svh place-items-center bg-noir-900 text-white">Loading…</div>}>
        <SimpleRouter
          routes={{
            '/': Home,
            '/product': Product,
            '/security-policy': SecurityPolicy,
            '/privacy-policy': PrivacyPolicy,
          }}
        />
      </Suspense>
      <Footer />
    </>
  )
}
