import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Links, SidenavLinks } from '../../data/Layout/Sidenav/Links';
import styles from '../../styles/Layout/Sidenav.module.scss';
/**
 * Set the layout for the Sidenav section
 * @return {JSX.Element}
 */
export default function Sidenav(): JSX.Element {
  const router = useRouter();
  const session = useSession();
  const { data } = session;
  const hasRoute = (selectedRoute: Links) =>
    router.asPath.split('/').includes(selectedRoute);

  return (
    <div className={styles.container}>
      <nav>
        <section className={styles.avatar}>
          <Image
            priority
            src={data?.user?.image!}
            alt="user"
            width="50"
            height="50"
          />
          <div className={styles.username}>{data?.user?.name}</div>
        </section>
        <ul>
          {SidenavLinks.map((link) => (
            <Link key={link.title} href={link.to}>
              <li className={`${hasRoute(link.to) ? styles.active : ''}`}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={link.icon} />
                </span>
                <span className={styles.title}>{link.title}</span>
              </li>
            </Link>
          ))}
        </ul>
        <section className={styles.logout}>
          <span
            className={styles.title}
            onClick={() => signOut({ callbackUrl: '/', redirect: true })}
          >
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </span>
            Salir
          </span>
        </section>
      </nav>
    </div>
  );
}
