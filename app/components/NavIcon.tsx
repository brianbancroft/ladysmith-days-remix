import styles from './NavIcon.module.css'

function NavIcon(props: any) {
  const { open, small } = props

  return (
    <div
      className={`${styles.navicon} ${open ? styles.open : ''} ${
        small ? styles.small : ''
      }`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default NavIcon
