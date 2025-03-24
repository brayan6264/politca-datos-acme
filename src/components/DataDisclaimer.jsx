import React from 'react';

const DataDisclaimer = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#f5f1eb', color: '#1c1c1c', maxWidth: '800px', margin: '0 auto', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#7c1c1c', marginBottom: '24px' }}>
        Autorización para el Tratamiento de Datos Personales e Imagen – ACME S.A.S.
      </h1>

      <p>
        Yo, como titular de los datos personales, autorizo de manera libre, previa, expresa e informada a <strong>ACME S.A.S.</strong>, identificada con NIT 800.000.000-0, para que recolecte, almacene, use, trate y circule mis datos personales y mi imagen en desarrollo de sus eventos, actividades institucionales, promocionales y académicas, de conformidad con la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normativas colombianas vigentes en materia de protección de datos.
      </p>

      <p>
        La presente autorización incluye el uso de mis datos e imagen para la toma de fotografías, grabaciones de video y audio, transmisión y publicación en medios digitales e impresos, como páginas web, redes sociales, boletines, material audiovisual, piezas gráficas, y en general cualquier formato de comunicación institucional o promocional, tanto en Colombia como en el exterior, por un tiempo indefinido.
      </p>

      <p>
        Así mismo, cedo los derechos patrimoniales de autor relacionados con las imágenes y grabaciones captadas durante los eventos, incluyendo reproducción, distribución, comunicación pública, transformación y cualquier otro uso que tenga relación con la imagen o voz registrada. Renuncio expresamente a cualquier derecho de inspección, aprobación o compensación económica sobre dichas publicaciones.
      </p>

      <p>
        Declaro que esta autorización es voluntaria y gratuita, y reconozco que ACME S.A.S. y sus aliados no están obligados a otorgar compensaciones, reconocimientos económicos ni beneficios derivados del uso de mi imagen o información personal. Así mismo, manifiesto que no poseo propiedad ni dominio sobre las obras resultantes del uso de mi imagen personal en los medios de comunicación mencionados.
      </p>

      <p>
        Podré ejercer mis derechos de acceso, rectificación, cancelación, supresión y oposición al tratamiento de mis datos personales, así como solicitar prueba de esta autorización o revocarla en cualquier momento, mediante solicitud escrita al correo electrónico <a href="mailto:protecciondedatos@acme.com">protecciondedatos@acme.com</a>, o mediante comunicación dirigida a la dirección física Calle 100 #10-10, Oficina 1001, Bogotá D.C., Colombia.
      </p>

      <p>
        Para mayor información, podré consultar la Política de Tratamiento de Datos Personales en el siguiente enlace:
        <a href="https://acme.com/politica-de-datos" target="_blank" rel="noopener noreferrer"> https://acme.com/politica-de-datos</a>.
      </p>

      <p style={{ fontWeight: 'bold' }}>
        Al continuar con el diligenciamiento del formulario y activar la opción de aceptación, manifiesto que he leído y comprendido este documento, y autorizo a ACME S.A.S. para el tratamiento de mis datos personales y el uso de mi imagen, conforme a lo aquí establecido.
      </p>
    </div>
  );
};

export default DataDisclaimer;
