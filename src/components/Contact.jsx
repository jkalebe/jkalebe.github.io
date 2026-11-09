import { FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight, FiInstagram, FiMail } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';

const channels = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jeremias-kalebe-cunha-estumano-5990b621b/', Icon: FaLinkedin },
  { name: 'E-mail', href: 'mailto:jeremiaskalebe@gmail.com', Icon: FiMail },
  { name: 'WhatsApp', href: 'https://wa.me/5594992727306', Icon: IoLogoWhatsapp },
  { name: 'Instagram', href: 'https://www.instagram.com/kalebe317/', Icon: FiInstagram },
];

export default function Contact() {
  return (
    <section className="contact-panel" id="contact" aria-labelledby="contact-title">
      <div>
        <h2 className="title" id="contact-title">Contato</h2>
        <p>Entre em contato para conversar sobre projetos mobile.</p>
      </div>
      <ul className="contact-links">
        {channels.map(({ name, href, Icon }) => (
          <li key={name}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon aria-hidden="true" /> {name} <FiArrowUpRight aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
