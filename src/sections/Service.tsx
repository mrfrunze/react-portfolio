import { SERVICES } from '../data/services'
import ServiceCard from '../components/ServiceCard'


const Service = () => {
  return (
    <section id="service" className='bg-white py-12 px-6 rounded-2xl mb-12 shadow'>
      <div className="container mx-auto">
        <div className="text-center  mb-10">
          <h2 className="text-4xl md:text-5xl font-bold uppercase">SERVICES</h2>
          <p className="mt-2 text-[#4e4e4e]">My skills</p>
          <div className="mx-auto mt-4 h-1 w-15 bg-[#0078ff]" />
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {SERVICES && (
            SERVICES.map((service) => (
              <ServiceCard 
                key={service.title}
                {...service}

              />
            ))
          )}
        </div>
      
      </div>
    </section>
  )
}

export default Service