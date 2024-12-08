import { OpenAI } from "openai";

async function getGPTResponse(messages) {
    // OpenAI 클라이언트 설정
    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        organization: process.env.REACT_APP_OPENAI_ORG_ID,
        dangerouslyAllowBrowser: true
    });

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: messages,
            temperature: 0.2,
            max_tokens: 2048
        });

        // GPT 응답에서 필요한 부분만 추출
        const assistantMessage = completion.choices[0].message.content;
        console.log("GPT 응답:", assistantMessage);

        return assistantMessage;

    } catch (error) {
        console.error("오류 발생:", error);
    }
}

export {
    getGPTResponse
};
