import { memo } from "react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Maharashtra Shasan",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YcwlSWCUZ8ZgRme6SPHqPvnu9Id6bh.png",
  },
  {
    name: "Maharashtra Tourism",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0xs6rYgBjNTntla0E9eYUePUWsu5Kh.png",
  },
  {
    name: "Audible",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NseqnN7bc7sE5mpJT3XTjieAnmd9b3.png",
  },
  {
    name: "Finolex Pipes",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TNQt83cp5twkEQQu86Xymx4CGC0U7r.png",
  },
  {
    name: "Rhyfil",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-paKJPB3gW7348LVQbNkoOEfozne6f9.png",
  },
  {
    name: "AppDirect India",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yGneudVcskJQwVlNr2EUfBFJOKJMcf.png",
  },
  {
    name: "Teradata India",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Hgj9CJKtmSCFl6wC6f2VZyp6YZ8N1U.png",
  },
  {
    name: "Snovel",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sIjkJJajpFFuslYn0yogprQ0CK1rBW.png",
  },
  {
    name: "Zee Music Marathi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-32xdv5TRmxy6U4XVN7fNx9elWRKnoT.png",
  },
  {
    name: "Symbiosis SSOU",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6lUMzn5vhqnpIgYtnMgCud3Ew4yIQR.png",
  },
  {
    name: "Nanded Waghala Municipal Corp",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Hr0lkXKPzDM7MGYseR42w6epGStzr.png",
  },
  {
    name: "Gurukul Public School",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Hr0lkXKPzDM7MGYseR42w6epGStzr.png",
  },
];

const Clients = memo(() => {
  return (
    <section className="relative py-16 md:py-20 bg-black">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-black to-black pointer-events-none" />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20 text-center mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-8 font-medium">
            ▸ Trusted By Industry Leaders
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-gray-400 mt-6 leading-relaxed">
            Proudly partnering with top brands, studios, and organizations across India and beyond
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-transparent border border-white/10 rounded-lg p-6 sm:p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-transparent border border-white/10 rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-primary/50 hover:bg-white/[0.05] transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] flex items-center justify-center min-h-[150px] sm:min-h-[180px] md:min-h-[200px]">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain px-2 sm:px-3"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-4">
            And many more prestigious brands
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-primary text-xs">★</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Clients.displayName = "Clients";
export default Clients;
