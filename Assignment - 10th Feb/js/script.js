  let captcha = "";
  let pasted = false;

  function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    captcha = "";
    for (let i = 0; i < 5; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("captchaText").textContent = captcha;
  }

  function submit() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (user === "" || pass === "") {
      alert("Please enter Username and Password");
      return;
    }

    document.getElementById("successMsg").classList.remove("hidden");
    document.getElementById("captchaSection").classList.remove("hidden");
    generateCaptcha();
  }

  // Detect paste in captcha field
  document.getElementById("captchaInput").addEventListener("paste", function () {
    pasted = true;
  });

  function verifyCaptcha() {
    const input = document.getElementById("captchaInput").value.trim();

    if (input === "") {
      alert("Captcha cannot be empty");
      return;
    }

    if (pasted) {
      alert("Copy-pasted captcha is invalid");
      pasted = false;
      generateCaptcha();
      document.getElementById("captchaInput").value = "";
      return;
    }

    if (input === captcha) {
      alert("Valid captcha");
    } else {
      alert("Invalid captcha");
      generateCaptcha();
    }
  }
