import { SMTPClient } from "emailjs";

const client = new SMTPClient({
	host: "127.0.0.1",
	port: 8825,
	ssl: false,
	tls: false // STARTTLS ネゴシエーションを試みない(ローカルテスト用途向け)
});

async function main() {
	try {
		const message = await client.sendAsync({
			from: ["ポストマスター <mxsa@360x180.net>"],
			to: ["いつものMxsaさん <mxsa@360x180.net>"],
			cc: ["Gmailのheiwaさん <heiwa4126@gmail.com>"],
			// 任意ヘッダーはトップレベルに直接置く
			"content-language": "ja",
			"content-type": 'text/plain; charset="UTF-8"',
			"content-transfer-encoding": "base64",
			subject: "日本語の件名テスト",
			text: `このメールは日本語で作成したテストメールです。
本文は日本語のみでテキストで記載しています。
HTMLのタグが入っていても絶対にHTMLとして解釈しないこと。
<strong>ここはテスト。</strong>
ご確認をお願いします。`
		});

		console.log("Email sent successfully:", message);
	} catch (err) {
		console.error("Failed to send email:", err);
	} finally {
		client.smtp.close(); // Don't forget to close the connection!
	}
}

main().catch(console.error);
