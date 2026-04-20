<!-- <!DOCTYPE html> -->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Siphokuhle Gedze | WIL Portfolio</title>
  <style>
    /* Modern CSS Styling */
    :root {
      --bg-color: #0f172a;
      --card-bg: rgba(255, 255, 255, 0.05);
      --accent-color: #38bdf8;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
    }

    body {
      font-family: 'Inter', -apple-system, sans-serif;
      background-color: var(--bg-color);
      color: var(--text-main);
      margin: 0;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.6;
    }

    .portfolio-container {
      max-width: 900px;
      width: 100%;
    }

    h1 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 40px;
      background: linear-gradient(to right, #38bdf8, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      font-size: 1.5rem;
      color: var(--accent-color);
      border-left: 4px solid var(--accent-color);
      padding-left: 15px;
      margin-top: 40px;
    }

    .card {
      background: var(--card-bg);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 30px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    iframe {
      border-radius: 8px;
      border: none;
      background: white;
    }

    video {
      width: 100%;
      border-radius: 12px;
      outline: none;
      background: #000;
    }

    a {
      color: var(--accent-color);
      text-decoration: none;
      font-weight: 600;
      transition: opacity 0.2s;
    }

    a:hover {
      opacity: 0.8;
    }

    .footer {
      text-align: center;
      margin-top: 60px;
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 40px 0;
    }
  </style>
</head>
<body>

  <div class="portfolio-container">
    <h1>Siphokuhle Gedze – WIL Portfolio</h1>

    <div class="card">
      <h2>📄 Professional CV</h2>
      <iframe src="Siphokuhle.Gedze.CV.pdf" style="width:100%; height:600px;"></iframe>
      <p style="margin-top: 15px;">
        If the PDF doesn't load, <a href="Siphokuhle.Gedze.CV.pdf">download it here</a>.
      </p>
    </div>

    <div class="card">
      <h2>🎥 Mock Interview Video</h2>
      <video controls>
        <source src="Siphokuhle Gedze Mock Interview.mp4" type="video/mp4">
        Your browser does not support video.
      </video>
    </div>

    <div class="footer">
      <hr>
      <p><em>This portfolio is part of my PRP372S submission.</em></p>
    </div>
  </div>

</body>
</html>
