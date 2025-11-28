import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Proyecto SEO Optimizado</title>
        <meta
          name="description"
          content="Página de contacto del proyecto con optimización SEO."
        />
        <meta name="keywords" content="contacto, soporte, SEO, Next.js" />

        <meta property="og:title" content="Contacto | Proyecto SEO Optimizado" />
        <meta
          property="og:description"
          content="Comunícate con nosotros para consultas o soporte."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ padding: 20 }}>
        <h1>Contacto</h1>
        <p>
          Si deseas más información sobre optimización SEO o Next.js, completa
          nuestro formulario o comunícate con nosotros.
        </p>

        <p><strong>Correo:</strong> contacto@mi-proyecto.com</p>
        <p><strong>Teléfono:</strong> +51 999 999 999</p>

        <h3 style={{ marginTop: 30 }}>Links rápidos</h3>
        <ul>
          <li>
            <Link href="/">Volver al Inicio</Link>
          </li>
          <li>
            <Link href="/blog">Ir al Blog</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
