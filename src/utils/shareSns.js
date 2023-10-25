const url = window.location.href;

const shareSns = {
  shareToKakaoStory: ({ title }) => {
    window.Kakao.Story.share({
      url,
      text: title,
    });
  },

  shareToKakaoTalk: ({ title, desc = "" }) => {
    console.log(window.Kakao);
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title,
        description: desc,
        imageUrl: "", // 공유할 이미지의 URL
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    });
  },

  shareToTwitter: ({ title }) => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;

    window.open(tweetUrl, "Share to Twitter", "width=800,height=600");
  },

  shareToNaverBlog: ({ title }) => {
    const shareUrl = `https://share.naver.com/web/shareView.nhn?url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}&content=123123123`;

    window.open(shareUrl, "Share to Naver Blog", "width=800,height=600");
  },

  shareToFacebook: () => {
    const sharedLink = encodeURIComponent(url);

    window.open(
      `http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`,
      "_blank"
    );
  },

  copyLink: () => {
    const textarea = document.createElement("textarea");
    textarea.value = url;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("주소가 복사되었습니다.");
  },
};

export default shareSns;
