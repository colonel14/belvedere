import Link from "next/link";

function PageLinksList() {
  return (
    <div className="page__info-list">
      <h5 className="page__list-title">Explore this section</h5>
      <ul>
        <li>
          <Link href="/life-and-learning" className="title__link">
            Life & Learning
          </Link>
          <ul>
            <li>
              <Link href="/life-and-learning/academic">Academic</Link>
            </li>
            <li>
              <Link
                href="/life-and-learning/broad-curriculum"
                className="title__link"
              >
                A Broad Curriculum
              </Link>
              <ul>
                <li>
                  <Link href="/life-and-learning/broad-curriculum/early-years-foundation-stage">
                    Early Years Foundation Stage
                  </Link>
                </li>
                <li>
                  <Link href="/life-and-learning/broad-curriculum/primary-stage">
                    Primary Stage
                  </Link>
                </li>
                <li>
                  <Link href="/life-and-learning/broad-curriculum/secondary-school">
                    Secondary School
                  </Link>
                </li>
              </ul>
              <li>
                <Link href="/life-and-learning/teaching-methodology">
                  Teaching Methodology
                </Link>
              </li>
            </li>
            <li>
              <Link
                href="/life-and-learning/extra-curricular-activities"
                className="title__link"
              >
                Extra-curricular Activities
              </Link>

              <ul>
                <li>
                  <Link href="/life-and-learning/extra-curricular-activities/sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link href="/life-and-learning/extra-curricular-activities/music">
                    Music
                  </Link>
                </li>
                <li>
                  <Link href="/life-and-learning/extra-curricular-activities/drama">
                    Drama
                  </Link>
                </li>
                <li>
                  <Link href="/life-and-learning/extra-curricular-activities/art-and-design">
                    Art & Design
                  </Link>
                </li>
                <li>
                  <Link href="/life-and-learning/extra-curricular-activities/trips">
                    Trips
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default PageLinksList;
