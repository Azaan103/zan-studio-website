import { Reveal, Btn } from "./Section";
import { packageCategories, packagesIntro, packageTerms, customProject } from "../data/packages";

function PackageCard({ item, categoryColor, index }) {
  return (
    <Reveal as="article" delay={index * 0.045} className={`package-card ${item.recommended ? "package-card--recommended" : ""}`} style={{ "--package-accent": categoryColor }}>
      <div className="package-card__top">
        <span className="pixel package-card__number">PACKAGE {item.n}</span>
        {item.recommended && <span className="package-card__recommended">Recommended</span>}
      </div>
      <h4>{item.name}</h4>
      <p className="package-card__tag">{item.tag}</p>
      <p className="package-card__price">{item.price}</p>
      <ul>{item.items.map((line) => <li key={line}>{line}</li>)}</ul>
      {item.note && <p className="package-card__note">{item.note}</p>}
    </Reveal>
  );
}

export default function Packages() {
  return (
    <section id="packages" className="section packages">
      <div className="container">
        <Reveal className="sec-head sec-head--ink">
          <h2 className="sec-title">{packagesIntro.title}</h2>
          <p className="sec-copy">{packagesIntro.line}</p>
        </Reveal>
        <div className="package-categories">
          {packageCategories.map((category) => (
            <section className="package-category" key={category.n} style={{ "--package-accent": category.color }}>
              <Reveal className="package-category__head">
                <span className="pixel">{category.n}</span>
                <div><h3>{category.name}</h3><p>{category.description}</p></div>
              </Reveal>
              <div className={`package-grid package-grid--${category.packages.length}`}>
                {category.packages.map((item, index) => <PackageCard key={`${category.n}-${item.n}`} item={item} categoryColor={category.color} index={index} />)}
              </div>
              {category.note && <p className="package-category__note">{category.note}</p>}
            </section>
          ))}
        </div>
        <Reveal className="pk-terms">
          <h3>BEFORE WE GET STARTED</h3>
          <ul>{packageTerms.map((term) => <li key={term}>{term}</li>)}</ul>
        </Reveal>
        <Reveal as="article" className="custom-project-card">
          <span className="pixel">LET'S MAKE IT YOURS</span>
          <h3>{customProject.name}</h3>
          <p className="custom-project-card__tag">{customProject.tag}</p>
          <p>{customProject.note}</p>
          <Btn href="#start">{customProject.cta}</Btn>
        </Reveal>
      </div>
    </section>
  );
}
