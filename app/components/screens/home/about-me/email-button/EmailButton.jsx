import Image from "next/image";
import { APP_URL } from "../../../../../constants";
import styles from "./EmailButton.module.scss";

const EmailButton = () => {
  return (
    <div className={styles.button}>
      <a
        href="https://t.me/jekskot"
        target="_blank"
        rel="noreferrer"
        title="@JeksKot TG"
      >
				<span>
					<Image
            src={`${APP_URL}/icons/telegram.svg`}
            alt=""
            height={18}
            width={18}
          />
				</span>
        <span>Telegram</span>
      </a>
    </div>
  );
};

export default EmailButton;
