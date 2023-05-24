import styles from "./vault.module.scss";

import { useGetKeysQuery } from "@redux/keys/keysApiSlice";
import { useState } from "react";

import KeyModal from "@/components/key-modal-component/key-modal";
import Button from "@components/button-component/button";
import Input from "@components/input-component/input";
import Key from "@components/key-component/key";

export default function Vault() {
	const { data: keys, isLoading, isSuccess, isError, error } = useGetKeysQuery("");

	const [keyId, setKeyId] = useState("");
	const [editorIsVisible, setEditorIsVisible] = useState(false);

	let content;

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	if (isError) {
		console.log(error);
	}

	if (isSuccess) {
		const { ids } = keys;

		const listContent = ids?.length
			? ids.map((keyId: any) => (
					<Key
						key={keyId}
						keyId={keyId}
						onClick={() => {
							setKeyId(keyId);
							setEditorIsVisible(true);
						}}
					/>
			  ))
			: null;

		content = <>{listContent}</>;
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.container__wrapper}>
					<div className={styles.container__wrapper__utilContainer}>
						<Input type="text" placeholder="Search..." />
						<Button text="New" color="primary" />
					</div>

					<div className={styles.container__wrapper__keyList}>{content}</div>
				</div>

				{editorIsVisible && (
					<div className={styles.container__keyEditor}>
						<KeyModal keyId={keyId} showEditor={setEditorIsVisible} />
					</div>
				)}
			</div>
			{editorIsVisible && (
				<div className={styles.shadow} onClick={() => setEditorIsVisible(false)}></div>
			)}
		</>
	);
}
