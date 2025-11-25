export default function ContactMapSection() {
  return (
    <section className="w-full">
      <div className="relative w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5!2d112.5432!3d37.8765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUyJzM1LjQiTiAxMTLCsDMyJzM1LjUiRQ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title="Shanxi Steel Location"
        ></iframe>
      </div>
      <div className="bg-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-700 space-y-1">
            <p className="font-semibold">中海寰宇天下</p>
            <p>中国山西省太原市万柏林区晋祠路8号</p>
            <p>中海寰宇天下 邮政编码:030071</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              查看大图
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

