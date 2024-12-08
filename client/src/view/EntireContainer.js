import React from 'react';
import {getGPTResponse} from "../api/GptApi";
import {useState, useEffect, useCallback} from "react";
import "./EntireContainer.scss";
import header from "../Images/header-image.png";
import firstProjectCover from "../Images/first-project-cover.png";
import secondProjectCover from "../Images/second-project-cover.png";
import thirdProjectCover from "../Images/third-project-cover.png";
import firstProjectContent from "../Images/first-project-content.png";
import secondProjectContent from "../Images/second-project-content.png";
import thirdProjectContent from "../Images/third-project-content.png";
import {useLocation} from "react-router-dom";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";

// import Image

function EntireContainer(props) {

    const [currentProject, setCurrentProject] = useState(null);
    const [isDetailVisible, setIsDetailVisible] = useState(false);

    const scrollToTop = useCallback(
        () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        []);


    const handleProjectClick = (projectIndex) => {
        setCurrentProject(projectIndex);
        setIsDetailVisible(true);
        scrollToTop();
    }

    const handleBackToCover = () => {
        setIsDetailVisible(false);
        // scrollToTop();
    }

    const [resultMessage, setResultMessage] = useState("");
    const [inputQuestion, setInputQuestion] = useState("");

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

    const slideOutStyleWithoutTransform =
        {transition: "transform 0.5s ease-in-out;"}
    const slideOutStyle = {
        transition: "transform 0.5s ease-in-out;",
        transform: "translateX(-100%)"
    }

    return (
        <div id={"EntireContainer"}>
            {!isDetailVisible && <div className="header-wrapper">
                <img className={"header-image"} src={header}/>
            </div>}
            {!isDetailVisible &&
                <div className="project-wrapper">
                    <img className={`project-cover ${isDetailVisible ? 'slide-out' : ''}`} src={firstProjectCover}
                         style={isDetailVisible ? slideOutStyle : slideOutStyleWithoutTransform}/>
                    <button className={"arrow-button"} onClick={() => handleProjectClick(1)}>
                        <FaArrowRight/>
                    </button>
                </div>}
            {isDetailVisible && currentProject === 1 && (
                <div className={"project-detail-wrapper first"}>
                    <div className="project-detail">
                        <div className={"back-button-wrapper first"}>
                            <button className="back-button" onClick={handleBackToCover}>
                                <FaArrowLeft/>
                            </button>
                        </div>
                        <img className={"project-content first"} src={firstProjectContent}/>
                    </div>
                </div>
            )}
            {!isDetailVisible &&
                <div className="project-wrapper">
                    <img className={`project-cover ${isDetailVisible ? 'slide-out' : ''}`} src={secondProjectCover}
                         style={isDetailVisible ? slideOutStyle : slideOutStyleWithoutTransform}/>
                    <button className={"arrow-button"} onClick={() => handleProjectClick(2)}>
                        <FaArrowRight/>
                    </button>
                </div>}
            {isDetailVisible && currentProject === 2 && (
                <div className={"project-detail-wrapper first"}>
                    <div className={"back-button-wrapper second"}>
                        <button className="back-button" onClick={handleBackToCover}>
                            <FaArrowLeft/>
                        </button>
                    </div>
                    <div className="project-detail">
                        <img className={"project-content first"} src={secondProjectContent}/>
                    </div>
                </div>
            )}
            {!isDetailVisible &&
                <div className="project-wrapper">
                    <img className={`project-cover ${isDetailVisible ? 'slide-out' : ''}`} src={thirdProjectCover}
                         style={isDetailVisible ? slideOutStyle : slideOutStyleWithoutTransform}/>
                    <button className={"arrow-button"} onClick={() => handleProjectClick(3)}
                            style={{color: "gray"}}>
                        <FaArrowRight/>
                    </button>
                </div>}
            {isDetailVisible && currentProject === 3 && (
                <div className={"project-detail-wrapper first"}>
                    <div className={"back-button-wrapper third"}>
                        <button className="back-button" onClick={handleBackToCover}>
                            <FaArrowLeft/>
                        </button>
                    </div>
                    <div className="project-detail">
                        <img className={"project-content first"} src={thirdProjectContent}/>
                    </div>
                </div>
            )}
            {!isDetailVisible && <div className="gpt-wrapper-test">gpt 래퍼</div>}
            {/*<div className="gpt-wrapper">*/}
            {/*    <div className="input-wrapper">*/}
            {/*        <div className={"button teaching"} onClick={buttonTeachingOnclick}>학습버튼</div>*/}
            {/*        <div className="input-box">질문을 입력하세요.</div>*/}
            {/*        <input value={inputQuestion} onChange={(e) => {*/}
            {/*            setInputQuestion(e.target.value)*/}
            {/*        }} placeholder={"질문을 입력하세요."}/>*/}
            {/*        <div className={"button asking"} onClick={() => {*/}
            {/*            buttonAskingOnclick(inputQuestion)*/}
            {/*        }}>물어보기*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="result-wrapper">{resultMessage}</div>*/}
            {/*</div>*/}
        </div>
    );
}

export default EntireContainer;
