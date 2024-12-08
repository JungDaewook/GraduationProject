import React from 'react';
import {getGPTResponse} from "../api/GptApi";
import {useState, useEffect, useCallback} from "react";
import "./EntireContainer.scss";
import header from "../Images/header-image.png";

// import Image

function EntireContainer(props) {

    const [resultMessage, setResultMessage] = useState("");
    const [inputQuestion, setInputQuestion] = useState("");

    // useEffect(()=> {
    //     const fetchGPTResponse = async () => {
    //         const result = await getGPTResponseByApi([
    //             {role: "system", content: "넌 지금부터 내 포트폴리오 전용 비서야. 내가 포트폴리오를 텍스트로 제공할 거야. 넌 그걸 학습하고 질문에 답변해주면 돼."},
    //             {role: "system", content: "자 이제 내 포트폴리오를 알려줄게"},
    //             {role: "system", content: "기업 연계 프로젝트 (야놀자) (빨리잡아! 쿠폰센터)\n" +
    //                     "- 숙박업주들을 위한 자체 쿠폰 발급 백오피스 웹 서비스 기획, 디자인, 개발\n" +
    //                     "- 기획자, 디자이너, 개발자를 포함하여 총 16명으로 이루어진 팀 리더 역할 수행\n" +
    //                     "- 최우수 프로젝트 선정\n" +
    //                     "\n" +
    //                     "앱 서비스 개선 프로젝트 (야놀자)\n" +
    //                     "- 숙소 이용 일시 오선택 방지를 위한 앱 UX 개선\n" +
    //                     "- A/B 테스트 진행 및 개선안 도출\n" +
    //                     "\n" +
    //                     "중고 물품 처리 앱 서비스 기획 (싹쓰리)\n" +
    //                     "- 0 to 1 앱 서비스 기획\n" +
    //                     "- 랜딩 페이지 제작, 사용성 테스트\n" +
    //                     "- 우수 프로젝트 선정\n"}
    //
    //         ]);
    //         setResultMessage(result);  // 결과를 비동기 처리 후 상태에 저장
    //     };
    //
    //     fetchGPTResponse(); // 비동기 함수 실행
    // },[])

    const buttonTeachingOnclick = useCallback(async () => {
        const result = await getGPTResponseByApi([
            {role: "system", content: "넌 지금부터 내 포트폴리오 전용 비서야. 내가 포트폴리오를 텍스트로 제공할 거야. 넌 그걸 학습하고 질문에 답변해주면 돼."},
            {role: "system", content: "자 이제 내 포트폴리오를 알려줄게"},
            {
                role: "system", content: "이름: 정대욱 기업 연계 프로젝트 (야놀자) (빨리잡아! 쿠폰센터)\n" +
                    "- 숙박업주들을 위한 자체 쿠폰 발급 백오피스 웹 서비스 기획, 디자인, 개발\n" +
                    "- 기획자, 디자이너, 개발자를 포함하여 총 16명으로 이루어진 팀 리더 역할 수행\n" +
                    "- 최우수 프로젝트 선정\n" +
                    "\n" +
                    "앱 서비스 개선 프로젝트 (야놀자)\n" +
                    "- 숙소 이용 일시 오선택 방지를 위한 앱 UX 개선\n" +
                    "- A/B 테스트 진행 및 개선안 도출\n" +
                    "\n" +
                    "중고 물품 처리 앱 서비스 기획 (싹쓰리)\n" +
                    "- 0 to 1 앱 서비스 기획\n" +
                    "- 랜딩 페이지 제작, 사용성 테스트\n" +
                    "- 우수 프로젝트 선정\n"
            },
            // {role: "assistant", content: "내 강점은 뭐라고 생각해?"},
        ]);
        setResultMessage(result);  // 결과를 비동기 처리 후 상태에 저장
    }, [])

    const buttonAskingOnclick = useCallback(async (questionInput) => {
        if (questionInput) {
            const result = await getGPTResponseByApi([
                {role: "system", content: "넌 지금부터 내 포트폴리오 전용 비서야. 내가 포트폴리오를 텍스트로 제공할 거야. 넌 그걸 학습하고 질문에 답변해주면 돼."},
                {role: "system", content: "자 이제 내 포트폴리오를 알려줄게"},
                {
                    role: "system", content: "이름: 정대욱 기업 연계 프로젝트 (야놀자) (빨리잡아! 쿠폰센터)\n" +
                        "- 숙박업주들을 위한 자체 쿠폰 발급 백오피스 웹 서비스 기획, 디자인, 개발\n" +
                        "- 기획자, 디자이너, 개발자를 포함하여 총 16명으로 이루어진 팀 리더 역할 수행\n" +
                        "- 최우수 프로젝트 선정\n" +
                        "\n" +
                        "앱 서비스 개선 프로젝트 (야놀자)\n" +
                        "- 숙소 이용 일시 오선택 방지를 위한 앱 UX 개선\n" +
                        "- A/B 테스트 진행 및 개선안 도출\n" +
                        "\n" +
                        "중고 물품 처리 앱 서비스 기획 (싹쓰리)\n" +
                        "- 0 to 1 앱 서비스 기획\n" +
                        "- 랜딩 페이지 제작, 사용성 테스트\n" +
                        "- 우수 프로젝트 선정\n"
                },
                {role: "assistant", content: questionInput},
                // {role: "assistant", content: "내 강점은 뭐라고 생각해?"},
            ]);
            setResultMessage(result);  // 결과를 비동기 처리 후 상태에 저장
        } else {
            setResultMessage("질문을 입력해주세요.")
        }
    }, [])


    const getGPTResponseByApi = useCallback(async (messages) => {
        const result = await getGPTResponse(messages);
        return result;
    }, [])

    return (
        <div id={"EntireContainer"}>
            <div className="header-wrapper">
                <img className={"header-image"} src={header}/>
            </div>
            <div className="project-wrapper">첫 번째 프로젝트</div>
            <div className="project-wrapper">두 번째 프로젝트</div>
            <div className="project-wrapper">세 번째 프로젝트</div>
            <div className="gpt-wrapper-test">gpt 래퍼</div>
            <div className="gpt-wrapper">
            <div className="input-wrapper">
            <div className={"button teaching"} onClick={buttonTeachingOnclick}>학습버튼</div>
            <div className="input-box">질문을 입력하세요.</div>
                     <input value={inputQuestion} onChange={(e) => {
                         setInputQuestion(e.target.value)
                     }} placeholder={"질문을 입력하세요."}/>
                    <div className={"button asking"} onClick={() => {
                        buttonAskingOnclick(inputQuestion)
                    }}>물어보기
                    </div>
                </div>
                <div className="result-wrapper">{resultMessage}</div>
            </div>
        </div>
    );
}

export default EntireContainer;
