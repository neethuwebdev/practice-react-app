export function CoreConcept({ image, title, description }) {
  return (<li>
    <img src={image} alt="core image" />
    <h3>{title}</h3>
    <p>
      {description}
    </p>
  </li>
  );
}