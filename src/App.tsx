/**
 * @copyright 2025 @thehref
 * @license Apache-2.0
 */


// Components
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Brand from '@/components/Brand';
import Feature from "@/components/ui/Feature";




const App = () => {
  return (
    <div className='relative isolate overflow-hidden'> 
    <Header/>

<main>
  <Hero/>
  <Brand/>
  <Feature/>
</main>

    </div>
  )
}

export default App
