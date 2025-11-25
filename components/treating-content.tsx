import Image from "next/image"

export default function TreatingContent() {
  return (
    <div className="space-y-12">
      {/* Image */}
      <div className="relative h-96 rounded-lg overflow-hidden">
        <Image
          src="/industrial-machinery-fabrication.jpg"
          alt="Coil Processing Machine"
          fill
          className="object-cover"
        />
      </div>

      {/* Why Surface Treatment Matters */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Surface Treatment Matters
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Stainless steel is renowned for its durability and resistance to corrosion, but these inherent properties can 
          be significantly enhanced through proper surface treatment. Surface treatments not only improve the material's 
          performance characteristics but also extend its lifespan and enhance its aesthetic appeal. Understanding the 
          importance of surface treatment is crucial for maximizing the value and performance of stainless steel components 
          in various applications.
        </p>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <div>
              <strong className="text-gray-900">Corrosion Resistance:</strong> The primary reason most stainless steel 
              undergoes surface treatments is to improve its resistance to rust and other forms of corrosion, ensuring 
              a longer lifespan. These treatments create protective layers that shield the material from environmental 
              factors that could compromise its integrity.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <div>
              <strong className="text-gray-900">Enhanced Aesthetics:</strong> Surface treatments can highlight the 
              natural luster of stainless steel or introduce new textures and colors, catering to the design intent of 
              a project. From mirror finishes to brushed textures, these treatments allow designers to achieve specific 
              visual effects.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <div>
              <strong className="text-gray-900">Cleanability and Sanitation:</strong> In industries where hygiene is 
              paramount, such as food processing and healthcare, surface treatments can promote easier cleanability and 
              maintain stringent sanitation standards. Smooth, treated surfaces reduce the ability of bacteria and 
              contaminants to adhere to the material.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <div>
              <strong className="text-gray-900">Surface Hardening:</strong> Certain treatments can increase the hardness 
              of the steel, making it more resistant to scratches and wear, which is beneficial in high-traffic areas. 
              This enhanced durability reduces maintenance requirements and extends the material's useful life.
            </div>
          </li>
        </ul>
      </section>

      {/* Pickling */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Pickling</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Pickling is a chemical treatment process that removes impurities, scale, and contaminants from the surface of 
          stainless steel. This process is essential for preparing the material for subsequent treatments or applications 
          where a clean, oxide-free surface is required. The pickling process involves immersing the stainless steel in an 
          acid solution that dissolves surface oxides, scale, and other contaminants that may have formed during 
          manufacturing, welding, or heat treatment processes.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          The chemicals commonly used in pickling include sulfuric acid, nitric acid, and hydrofluoric acid, each 
          selected based on the specific requirements of the material and the type of contaminants to be removed. The 
          process must be carefully controlled, as the acids are highly corrosive and can damage the material if not 
          properly managed. Temperature, concentration, and immersion time are critical parameters that must be 
          precisely controlled to achieve optimal results while preventing over-pickling.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Pickling serves as a crucial preparatory step for passivation and other surface treatments. By removing 
          surface contaminants and oxides, pickling ensures that subsequent treatments can effectively bond with the 
          base material and achieve the desired protective or aesthetic effects. The process also helps restore the 
          material's natural corrosion resistance by removing iron contamination that may have been introduced during 
          manufacturing or fabrication processes.
        </p>
      </section>

      {/* Passivation */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Passivation</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Passivation is a process that enhances the natural corrosion-resistant property of stainless steel by promoting 
          the formation of a protective chromium-oxide layer on the surface. This passive layer acts as a barrier, 
          preventing corrosion and maintaining the material's integrity in various environments. The passivation process 
          typically involves immersing the stainless steel in an acid bath, which removes free iron from the surface 
          while allowing chromium to form a stable oxide layer.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Both nitric acid and citric acid processes are commonly used for passivation, each offering specific advantages. 
          Nitric acid passivation is a traditional method that provides excellent results for most stainless steel grades, 
          while citric acid passivation offers environmental benefits and is increasingly preferred for its eco-friendly 
          characteristics. The choice between these methods depends on the material grade, application requirements, and 
          environmental considerations.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The benefits of passivation extend beyond corrosion resistance. The process improves the material's appearance, 
          creating a clean, uniform surface finish. It also enhances cleanability, making the surface easier to maintain 
          and sanitize. Additionally, passivation provides protection against scratches and surface damage, as the 
          chromium-oxide layer helps prevent the initiation of corrosion at damaged sites. This makes passivated stainless 
          steel ideal for applications where both performance and aesthetics are important.
        </p>
      </section>

      {/* Decontamination */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Decontamination</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Decontamination is a critical process in stainless steel fabrication that removes foreign materials, 
          contaminants, and impurities that could compromise the material's performance or appearance. During manufacturing, 
          welding, and handling, stainless steel can become contaminated with iron particles, grease, oils, or other 
          substances that can lead to corrosion, staining, or surface defects. Decontamination ensures that these 
          contaminants are completely removed, maintaining the material's integrity and appearance.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Various methods are employed for decontamination, each suited to different types of contaminants and 
          application requirements. Sandblasting uses abrasive particles to physically remove surface contaminants, 
          while light hand abrasion provides a gentler approach for delicate surfaces. Chemical etching utilizes acid 
          solutions to dissolve contaminants, and foam cleaning uses specialized cleaning agents that can penetrate 
          and remove embedded materials.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The importance of thorough decontamination cannot be overstated. Even small amounts of iron contamination 
          can lead to rust formation, compromising the material's corrosion resistance. Grease and oils can interfere 
          with subsequent treatments or create surface defects. By implementing comprehensive decontamination protocols, 
          we ensure that stainless steel components maintain their performance characteristics and visual appearance 
          throughout their service life.
        </p>
      </section>

      {/* Electropolishing */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Electropolishing</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Electropolishing is an electrochemical process that improves the surface finish of stainless steel by removing 
          microscopic defects, enhancing corrosion resistance, and creating a smooth, featureless surface. This process 
          is particularly important in hygienic industries such as pharmaceuticals and food manufacturing, where surface 
          smoothness directly impacts cleanability and contamination control. Electropolishing achieves results that are 
          superior to mechanical polishing methods, creating surfaces that are not only visually appealing but also 
          functionally superior.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          The electropolishing process involves immersing the stainless steel component in an electrolyte solution and 
          applying a direct current. The electrical current causes the material to dissolve at a controlled rate, 
          preferentially removing high points and surface irregularities. This results in a smooth, mirror-like finish 
          that is free from scratches, tool marks, and other surface defects. The process also removes a thin layer of 
          material, eliminating surface contamination and creating a fresh, passive surface.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The benefits of electropolishing extend beyond aesthetics. The process significantly improves corrosion 
          resistance compared to mechanically processed samples, as it removes surface defects that could serve as 
          initiation sites for corrosion. The smooth surface reduces friction and improves cleanability, making it ideal 
          for applications where hygiene and contamination control are critical. Additionally, electropolishing can 
          improve the material's fatigue resistance and reduce the risk of stress corrosion cracking, making it valuable 
          for demanding applications.
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Start Your Custom Project with Shanxi Steel</h2>
        <p className="text-lg leading-relaxed mb-4">
          At Shanxi Steel, we understand that every project has unique requirements, and we are committed to providing 
          customized surface treatment solutions that meet your specific needs. Our team of experienced professionals 
          combines technical expertise with attention to detail, ensuring that your stainless steel components receive 
          the treatment they need to perform optimally in their intended application.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Whether you require pickling, passivation, decontamination, electropolishing, or a combination of treatments, 
          we have the capabilities and expertise to deliver exceptional results. Our state-of-the-art facilities and 
          rigorous quality control processes ensure that every component meets the highest standards of quality and 
          performance.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Contact us today to discuss your surface treatment needs and discover how our comprehensive services can enhance 
          the performance, appearance, and longevity of your stainless steel components. We are here to help you achieve 
          your project goals with quality results that exceed expectations.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
        >
          Contact Us Now
        </a>
      </section>
    </div>
  )
}



