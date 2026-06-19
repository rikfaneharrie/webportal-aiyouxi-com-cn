function initSiteHelpers() {
  const config = {
    portalUrl: "https://webportal-aiyouxi.com.cn",
    keyword: "爱游戏",
    cardTitle: "欢迎使用爱游戏门户",
    cardBody: "点击下方按钮访问爱游戏，了解更多游戏资讯与攻略。",
    badgeText: "爱游戏",
    badgeColor: "#4a90d9"
  };

  const container = document.createElement("div");
  container.id = "site-helper-container";
  container.style.cssText = "position:fixed;bottom:20px;right:20px;z-index:9999;font-family:Arial,sans-serif;";

  const card = document.createElement("div");
  card.style.cssText = "background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.1);padding:16px;max-width:260px;";

  const title = document.createElement("h4");
  title.textContent = config.cardTitle;
  title.style.cssText = "margin:0 0 8px 0;font-size:16px;color:#333;";

  const body = document.createElement("p");
  body.textContent = config.cardBody;
  body.style.cssText = "margin:0 0 12px 0;font-size:13px;color:#555;line-height:1.4;";

  const linkBtn = document.createElement("a");
  linkBtn.href = config.portalUrl;
  linkBtn.target = "_blank";
  linkBtn.textContent = "前往爱游戏";
  linkBtn.style.cssText = "display:inline-block;padding:6px 14px;background:" + config.badgeColor + ";color:#fff;text-decoration:none;border-radius:4px;font-size:13px;";

  const badgeWrap = document.createElement("div");
  badgeWrap.style.cssText = "margin-top:12px;display:flex;flex-wrap:wrap;gap:6px;";

  const badge = document.createElement("span");
  badge.textContent = config.badgeText;
  badge.style.cssText = "display:inline-block;padding:3px 10px;background:" + config.badgeColor + ";color:#fff;border-radius:12px;font-size:12px;";

  const accessNote = document.createElement("p");
  accessNote.textContent = "说明：点击按钮即可访问爱游戏官方门户，获取最新游戏动态。";
  accessNote.style.cssText = "margin:10px 0 0 0;font-size:11px;color:#999;";

  badgeWrap.appendChild(badge);
  card.appendChild(title);
  card.appendChild(body);
  card.appendChild(linkBtn);
  card.appendChild(badgeWrap);
  card.appendChild(accessNote);
  container.appendChild(card);
  document.body.appendChild(container);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSiteHelpers);
} else {
  initSiteHelpers();
}