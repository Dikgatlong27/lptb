import React from 'react';
import './Clients.css';

const clients = [
  { name: 'The Chairman Group', logo: 'chairman.png' },
  { name: 'Fortress Restaurant', logo: 'fortress.png' },
  { name: 'LVSIFT', logo: 'lvsift-full.png' },
  { name: 'YaBatho', logo: 'yabatho-official.png' },
  { name: 'Gaza Tech', logo: 'gaza-tech.png' },
  { name: 'Axe Projects Consultants', logo: 'axe-projects.png' },
  { name: 'C-Digital', logo: 'c-digital.png' },
  { name: 'Vipro Trading', logo: 'vipro.png' },
  { name: 'NNGA Holdings', logo: 'nnga.png' },
  { name: 'Quick Compass Trading', logo: 'quick-compass.png' },
  { name: 'Mofokeng Works', logo: 'mofokeng.png' },
  { name: 'JoThMa Trading', logo: 'jothma.png' },
  { name: 'Lekapa Farming', logo: 'lekapa.png' },
  // Name cards preserve the client list until verified logo artwork is available.
  { name: 'Aquawatt Trading' },
  { name: 'Scepter Group', logo: 'scepter-group.jpg' },
];

const ClientCard = ({ client }) => (
  <li className="client-logo">
    <div className="client-artwork">
    {client.logo ? (
      client.name === 'LVSIFT' ? (
        <div className="client-logo-crop">
          <img src={`/clients/${client.logo}`} alt={client.name} loading="eager" draggable={false} />
        </div>
      ) : <img src={`/clients/${client.logo}`} alt={client.name} loading="eager" draggable={false} />
    ) : <span className="client-name">{client.name}</span>}
    </div>
    {client.logo && <span className="client-caption">{client.name}</span>}
  </li>
);

const Clients = () => (
  <section className="clients-section" aria-labelledby="clients-title">
    <div className="clients-container">
      <div className="clients-heading"><div><p className="section-eyebrow">04 / PEOPLE WE WORK WITH</p><h2 id="clients-title">Our Clients</h2></div><p>Different businesses.<br />A shared ambition to grow.</p></div>
      <ul className="clients-grid">
        {clients.map(client => <ClientCard key={client.name} client={client} />)}
      </ul>
    </div>
  </section>
);
export default Clients;
