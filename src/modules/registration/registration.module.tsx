import styles from "./registration.module.scss";
// @components
import Button from "@components/button/button.component";
import Input from "@components/input/input.component";
import Logo from "@components/logo/logo.component";

// page module for "/register" route
export default function Registration() {
	return (
		<div className={styles["registration-module"]}>
			<Logo size="110" />

			<p className={"title"}>Create account</p>

			<form className={styles["form"]}>
				<div className={styles["form__field"]}>
					<label className={styles["form__field__label"]} htmlFor="email">
						Email
					</label>

					<Input className={styles["form__field__input"]} id="email" type="text" />
				</div>

				<div className={styles["form__field"]}>
					<label className={styles["form__field__label"]} htmlFor="password">
						Password
					</label>

					<span className={`${styles["form__field__forgot-password"]} link`}>
						Forgot password?
					</span>

					<Input className={styles["form__field__input"]} id="password" type="password" />
				</div>

				<Button
					className={styles["form__button"]}
					text="Create account"
					color="primary"
					flex={true}
				/>

				<p className={styles["form__hint"]}>
					I have an account. <span className={"link"}>Sign in</span>
				</p>
			</form>
		</div>
	);
}
