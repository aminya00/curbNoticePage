let noticeContainer=$.querySelector(".notice-container")

let locationSearchParams=new URLSearchParams(location.search)
noticePageMaker(noticeContainer,locationSearchParams.get("k1"))