import "./footer.scss";

export default function Footer() {
  return (
    <div className="l_footer">
      <p className="l_footer__copyright">
        &copy; Zayed Hassan | {new Date().getFullYear()} | All rights reserved
      </p>
    </div>
  );
}
