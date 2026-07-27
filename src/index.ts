import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: "127.0.0.1",
	port: 8825,
	secure: false, // STARTTLSなし・平文接続
	ignoreTLS: true // TLSネゴシエーションを試みない(ローカルテスト用途向け)
	// auth不要なら未指定でOK
});

async function main() {
	const info = await transporter.sendMail({
		from: '"ポストマスター" <mxsa@360x180.net>',
		to: '"いつものMxsaさん" <mxsa@360x180.net>',
		cc: '"Gmailのheiwaさん" <heiwa4126@gmail.com>',
		headers: {
			"Content-Language": "ja",
			"Content-Type": 'text/plain; charset="UTF-8"'
		},
		subject: "日本語の件名テスト", // 自動でRFC2047エンコードされる
		text: `このメールは日本語で作成したテストメールです。
本文は日本語のみでテキストで記載しています。
HTMLのタグが入っていても絶対にHTMLとして解釈しないこと。
<strong>ここはテスト。</strong>
ご確認をお願いします。`
		// html: "<p>HTML本文も可能</p>",
	});

	console.log("Message sent:", info.messageId);
}

main().catch(console.error);
