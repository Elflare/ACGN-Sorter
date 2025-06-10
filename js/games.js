// Internationalization Script for games.html
const gameI18nData = {
    'en': {
        pageTitleGame: "Game Sorting System",
        headerTitleGame: "Game Sorting System",
        headerSubtitleGame: "Add your favorite games and rank them through pairwise comparisons",
        tutorialTitleTextGame: "Instructions",
        tutorialLi1TextGame: "Add Games: Enter game name, and upload cover or use an external image link.",
        tutorialLi2TextGame: "Cover Optional: A default icon will be used if no cover is added.",
        tutorialLi3TextGame: "Local Storage: All data is saved in your browser and won't be lost on refresh.",
        tutorialLi4TextGame: "Sorting Phase: The system will show two games; choose the one you prefer.",
        tutorialLi6TextGame: "Elo Rating System: This system calculates the relative preference levels for items (characters, games, ACN works) by comparing them in pairs. Each item has an Elo score that updates after each comparison.",
        tutorialLi7TextGame: "Powered by DeepSeek R1 & Gemini 2.5 pro",
        labelItemNameGame: "Game Name *",
        inputItemNamePlaceholderGame: "Enter game name",
        labelUploadCoverGame: "Upload Cover",
        uploadAreaSpanGame: "Click to upload image or drag and drop file here",
        labelUrlCoverGame: "Or use Image URL",
        inputCoverUrlPlaceholderGame: "Enter cover image URL",
        previewLoadingTextGame: " Image loading...",
        previewErrorTextGame: "Image failed to load, please check URL",
        addItemBtnTextGame: "Add Game",
        startSortingBtnTextGame: "Start Sorting",
        resetAllBtnTextGame: "Reset All",
        backToHomeLinkGame: "Back to Home",
        importJsonBtnTextGame: "Import Game List",
        exportJsonBtnTextGame: "Export Game List",
        comparePhaseTitleGame: "Which game do you prefer?",
        comparePhaseSubtitleGame: "Click to select your preferred game",
        // compareInfoPrefixGame: "Current progress: ", // Removed
        // compareInfoSuffixGame: " comparisons", // Removed
        // progressBarTextPrefixGame: "Comparison progress: ", // Removed
        resultPhaseTitleGame: "Game Sorting Results",
        resultPhaseSubtitleGame: "Based on your selections, here is the game preference ranking",
        reviewSectionTitleGame: "AI Review Prompts", // Changed from promptTitleTextGame
        sharpReviewBtnTextGame: "Sharp Review",
        seriousReviewBtnTextGame: "Serious Review",
        copyToAiTextGame: "(Copy and send to AI)",
        copyBtnTextGame: " Copy", // Kept for new buttons
        restartBtnTextGame: "Continue sorting",
        backToAddBtnTextGame: "Back to Modify",
        alertEnterGameName: "Please enter the game name",
        alertNeedTwoGames: "You need to add at least two games to sort",
        confirmResetAllGames: "Are you sure you want to delete all games? This action cannot be undone.",
        alertImportError: "Error importing JSON. Please check the file format.",
        alertNoFileSelected: "No file selected.",
        alertCopyFailed: "Copy failed, your browser may not support this feature.",
        copiedSuccessText: "Copied!",
        emptyGameListPlaceholder: "No games added yet",
        promptRequestReviewGameTemplate: "You are now a tsundere girl who is proficient in the acg field. I have ranked my favorite games. Please review them:\n{ranking}",
        promptRequestSeriousReviewGameTemplate: "You are now an ACG enthusiast. I have ranked my favorite games. Please provide a detailed review:\n{ranking}",
        // continueSortingBtnTextGame: "Continue Last Sort", // Removed
        stopSortingBtnTextGame: "Stop Sorting & View Results",
        // saveProgressBtnTextGame: "Save Progress", // Removed
        liveRankingTitleGame: "Live Ranking",
        // alertProgressSaved: "Progress saved successfully!", // Removed
        // alertProgressLoaded: "Progress loaded successfully!", // Removed
        // alertNoSavedProgress: "No saved progress found.", // Removed
        // confirmOverwriteProgress: "Starting a new sort will overwrite any saved progress. Continue?", // Removed
        resetEloBtnTextGame: "Reset Elo Scores",
        confirmResetEloGame: "Are you sure you want to reset all Elo scores for games? This will reset them to the default value.",
        alertEloResetGame: "Game Elo scores have been reset."
    },
    'zh': {
        pageTitleGame: "游戏排序系统",
        headerTitleGame: "游戏排序系统",
        headerSubtitleGame: "添加你喜爱的游戏，通过两两比较得出最终排名",
        tutorialTitleTextGame: "使用说明",
        tutorialLi1TextGame: "添加游戏：输入游戏名称，并上传封面或使用外链图片",
        tutorialLi2TextGame: "封面可选：不添加封面将使用默认图标",
        tutorialLi3TextGame: "本地存储：所有数据保存在浏览器中，刷新页面不会丢失",
        tutorialLi4TextGame: "排序阶段：系统会展示两个游戏，选择你更喜欢的游戏",
        tutorialLi6TextGame: "Elo等级分系统：本系统通过两两对比来计算项目（角色、游戏、ACN作品）的相对喜好程度。每个项目都有一个 Elo 分数，该分数在每次比较后更新。",
        tutorialLi7TextGame: "Powered by DeepSeek R1 & Gemini 2.5 pro",
        labelItemNameGame: "游戏名称 *",
        inputItemNamePlaceholderGame: "输入游戏名称",
        labelUploadCoverGame: "上传封面",
        uploadAreaSpanGame: "点击上传图片或拖放文件到此处",
        labelUrlCoverGame: "或使用图片链接",
        inputCoverUrlPlaceholderGame: "输入封面图片URL",
        previewLoadingTextGame: " 图片加载中...",
        previewErrorTextGame: "图片加载失败，请检查URL",
        addItemBtnTextGame: "添加游戏",
        startSortingBtnTextGame: "开始排序",
        resetAllBtnTextGame: "重置所有",
        backToHomeLinkGame: "返回首页",
        importJsonBtnTextGame: "导入游戏列表",
        exportJsonBtnTextGame: "导出游戏列表",
        comparePhaseTitleGame: "你更喜欢哪个游戏？",
        comparePhaseSubtitleGame: "点击选择你更喜欢的游戏",
        // compareInfoPrefixGame: "当前进度: ", // Removed
        // compareInfoSuffixGame: " 次比较", // Removed
        // progressBarTextPrefixGame: "比较进度: ", // Removed
        resultPhaseTitleGame: "游戏排序结果",
        resultPhaseSubtitleGame: "根据你的选择，以下是游戏喜爱度排名",
        reviewSectionTitleGame: "AI 评价提示", // Changed from promptTitleTextGame
        sharpReviewBtnTextGame: "请求锐评",
        seriousReviewBtnTextGame: "正经评论",
        copyToAiTextGame: "（复制并发送给 AI）",
        copyBtnTextGame: " 复制", // Kept for new buttons
        restartBtnTextGame: "继续排序",
        backToAddBtnTextGame: "返回修改",
        alertEnterGameName: "请输入游戏名称",
        alertNeedTwoGames: "至少需要添加两个游戏才能排序",
        confirmResetAllGames: "确定要删除所有游戏吗？此操作不可撤销。",
        alertImportError: "导入JSON失败，请检查文件格式。",
        alertNoFileSelected: "未选择文件。",
        alertCopyFailed: "复制失败，您的浏览器可能不支持此功能。",
        copiedSuccessText: "已复制!",
        emptyGameListPlaceholder: "还没有添加任何游戏",
        promptRequestReviewGameTemplate: "你现在是一个精通acg领域的雌小鬼。我给自己喜欢的游戏进行了一个排行，你来进行评价：\n{ranking}",
        promptRequestSeriousReviewGameTemplate: "你现在是一个精通acg领域的爱好者。我给自己喜欢的游戏进行了一个排行，你来进行详细评价：\n{ranking}",
        // continueSortingBtnTextGame: "继续上次排序", // Removed
        stopSortingBtnTextGame: "停止排序并查看结果",
        // saveProgressBtnTextGame: "保存进度", // Removed
        liveRankingTitleGame: "实时排名",
        // alertProgressSaved: "进度已保存！", // Removed
        // alertProgressLoaded: "已加载保存的进度！", // Removed
        // alertNoSavedProgress: "未找到已保存的进度。", // Removed
        // confirmOverwriteProgress: "开始新的排序将覆盖任何已保存的进度。是否继续？", // Removed
        resetEloBtnTextGame: "重置Elo分数",
        confirmResetEloGame: "确定要重置所有游戏的Elo分数吗？这将把它们恢复到默认值。",
        alertEloResetGame: "游戏Elo分数已重置。"
    }
};

function applyGameTranslations() {
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.startsWith('zh') ? 'zh' : 'en';
    const texts = gameI18nData[lang];

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = texts.pageTitleGame;

    const elementsToTranslate = {
        'header-title-game': texts.headerTitleGame,
        'header-subtitle-game': texts.headerSubtitleGame,
        'tutorial-title-text-game': texts.tutorialTitleTextGame,
        'tutorial-li-1-text-game': texts.tutorialLi1TextGame,
        'tutorial-li-2-text-game': texts.tutorialLi2TextGame,
        'tutorial-li-3-text-game': texts.tutorialLi3TextGame,
        'tutorial-li-4-text-game': texts.tutorialLi4TextGame,
        'tutorial-li-6-text-game': texts.tutorialLi6TextGame,
        'tutorial-li-7-text-game': texts.tutorialLi7TextGame,
        'label-item-name-game': texts.labelItemNameGame,
        'label-upload-cover-game': texts.labelUploadCoverGame,
        'upload-area-span-game': texts.uploadAreaSpanGame,
        'label-url-cover-game': texts.labelUrlCoverGame,
        'preview-loading-text-game': texts.previewLoadingTextGame,
        'preview-error-text-game': texts.previewErrorTextGame,
        'add-item-btn-text-game': texts.addItemBtnTextGame,
        'start-sorting-btn-text-game': texts.startSortingBtnTextGame,
        'reset-all-btn-text-game': texts.resetAllBtnTextGame,
        'reset-elo-btn-text-game': texts.resetEloBtnTextGame, // Added
        'back-to-home-link-game': texts.backToHomeLinkGame,
        'import-json-btn-text-game': texts.importJsonBtnTextGame,
        'export-json-btn-text-game': texts.exportJsonBtnTextGame,
        'compare-phase-title-game': texts.comparePhaseTitleGame,
        'compare-phase-subtitle-game': texts.comparePhaseSubtitleGame,
        // 'compare-info-prefix-game': texts.compareInfoPrefixGame, // Removed
        // 'compare-info-suffix-game': texts.compareInfoSuffixGame, // Removed
        // 'progress-bar-text-prefix-game': texts.progressBarTextPrefixGame, // Removed
        'result-phase-title-game': texts.resultPhaseTitleGame,
        'result-phase-subtitle-game': texts.resultPhaseSubtitleGame,
        'prompt-title-text-game': texts.reviewSectionTitleGame, // Updated key
        // 'copy-btn-text-game': texts.copyBtnTextGame, // Will be part of dynamic buttons
        'restart-btn-text-game': texts.restartBtnTextGame,
        'back-to-add-btn-text-game': texts.backToAddBtnTextGame,
        // 'continue-sorting-btn-text-game': texts.continueSortingBtnTextGame, // Removed
        'stop-sorting-btn-text-game': texts.stopSortingBtnTextGame,
        // 'save-progress-btn-text-game': texts.saveProgressBtnTextGame, // Removed
        'live-ranking-title-game': texts.liveRankingTitleGame
    };

    for (const id in elementsToTranslate) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = elementsToTranslate[id];
        }
    }

    const gameNameInput = document.getElementById('game-name');
    if (gameNameInput) gameNameInput.placeholder = texts.inputItemNamePlaceholderGame;
    const coverUrlInput = document.getElementById('cover-url');
    if (coverUrlInput) coverUrlInput.placeholder = texts.inputCoverUrlPlaceholderGame;

    window.currentGameTranslations = texts;
    window.currentLang = lang; // Store current language globally
}

document.addEventListener('DOMContentLoaded', applyGameTranslations);

document.addEventListener('DOMContentLoaded', function () {
    let games = JSON.parse(localStorage.getItem('games')) || [];
    games.forEach(game => {
        if (game.elo === undefined) {
            game.elo = 1200;
        }
    });
    let comparisonPairs = [];
    let currentPairIndex = 0;
    let totalComparisons = 0;
    const K_FACTOR = 32;
    let debounceTimer;
    let isSortingInProgress = false;
    // const SAVED_PROGRESS_KEY_GAME = 'gameSortProgress'; // Removed

    const resizerCanvas = document.getElementById('image-resizer-canvas');
    const addPhase = document.getElementById('add-phase');
    const comparePhase = document.getElementById('compare-phase');
    const resultPhase = document.getElementById('result-phase');
    const gamesList = document.getElementById('games-list');
    const gameNameInput = document.getElementById('game-name');
    const coverInput = document.getElementById('cover-input');
    const coverUrlInput = document.getElementById('cover-url');
    const coverPreview = document.getElementById('cover-preview');
    const coverUploadArea = document.getElementById('cover-upload-area');
    const cancelUploadBtn = document.getElementById('cancel-upload');
    const addGameBtn = document.getElementById('add-game-btn');
    const startSortingBtn = document.getElementById('start-sorting-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resetEloBtn = document.getElementById('reset-elo-btn'); // Added
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    // const progressFill = document.getElementById('progress-fill'); // Removed
    // const progressTextElem = document.getElementById('progress-text'); // Removed
    // const currentComparisonSpan = document.getElementById('current-comparison'); // Removed
    // const totalComparisonsSpan = document.getElementById('total-comparisons'); // Removed
    const rankingList = document.getElementById('ranking-list');
    const restartBtn = document.getElementById('restart-btn');
    const backToAddBtn = document.getElementById('back-to-add-btn');
    const urlPreviewContainer = document.querySelector('.url-preview-container');
    const urlPreviewImage = document.getElementById('url-preview-image');
    const previewLoading = document.getElementById('preview-loading');
    const previewError = document.getElementById('preview-error');
    // const promptOutput = document.getElementById('prompt-output'); // To be replaced
    // const copyBtn = document.getElementById('copy-btn'); // To be replaced
    const importJsonInputGame = document.getElementById('import-json-input-game'); // Assuming this ID exists or was intended
    const importJsonBtnGame = document.getElementById('import-json-btn'); // Corrected to match HTML
    const exportJsonBtnGame = document.getElementById('export-json-btn'); // Corrected to match HTML
    // const continueSortingBtnGame = document.getElementById('continue-sorting-btn-game'); // Removed
    const stopSortingBtnGame = document.getElementById('stop-sorting-btn'); // Corrected to match HTML
    // const saveProgressBtnGame = document.getElementById('save-progress-btn-game'); // Removed
    const liveRankingListGame = document.getElementById('live-ranking-list-game'); // Corrected to match HTML ID


    function resizeImage(file, callback) {
        const max_size = 512;
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                let width = img.width;
                let height = img.height;
                if (width > height) {
                    if (width > max_size) {
                        height *= max_size / width;
                        width = max_size;
                    }
                } else {
                    if (height > max_size) {
                        width *= max_size / height;
                        height = max_size;
                    }
                }
                resizerCanvas.width = width;
                resizerCanvas.height = height;
                const ctx = resizerCanvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                const dataUrl = resizerCanvas.toDataURL('image/jpeg', 0.9);
                callback(dataUrl);
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }

    function initGamePage() {
        renderGameList();
        updateStartButtonStateGame(); // Changed
        if (!window.currentGameTranslations) { // Ensure translations
            applyGameTranslations();
        }
    }
    initGamePage();


    importJsonBtnGame.addEventListener('click', () => {
        if(importJsonInputGame) importJsonInputGame.click(); // Check if element exists
    });

    if(importJsonInputGame) { // Check if element exists
        importJsonInputGame.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (!file) {
                alert(window.currentGameTranslations.alertNoFileSelected);
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedData = JSON.parse(e.target.result);
                    if (Array.isArray(importedData)) {
                        games = [];
                        importedData.forEach(item => {
                            if (item && typeof item.name === 'string' && (typeof item.cover === 'string' || typeof item.url === 'string')) {
                                games.push({
                                    id: Date.now() + Math.random(),
                                    name: item.name,
                                    cover: item.cover || item.url || '',
                                    elo: item.elo !== undefined ? parseInt(item.elo, 10) : 1200
                                });
                            }
                        });
                        localStorage.setItem('games', JSON.stringify(games));
                        // localStorage.removeItem(SAVED_PROGRESS_KEY_GAME); // Removed
                        renderGameList();
                        updateStartButtonStateGame();
                    } else {
                        alert(window.currentGameTranslations.alertImportError);
                    }
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    alert(window.currentGameTranslations.alertImportError);
                }
                importJsonInputGame.value = '';
            };
            reader.readAsText(file);
        });
    }


    exportJsonBtnGame.addEventListener('click', () => {
        const dataToExport = games.map(item => ({ name: item.name, cover: item.cover, elo: item.elo })); // Added elo
        const jsonString = JSON.stringify(dataToExport, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'games_export.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    coverUploadArea.addEventListener('click', () => coverInput.click());

    coverUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        coverUploadArea.style.borderColor = '#00c6ff';
        coverUploadArea.style.background = 'rgba(0, 198, 255, 0.1)';
    });

    coverUploadArea.addEventListener('dragleave', () => {
        coverUploadArea.style.borderColor = '#666';
        coverUploadArea.style.background = 'rgba(255, 255, 255, 0.05)';
    });

    coverUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        coverUploadArea.style.borderColor = '#666';
        coverUploadArea.style.background = 'rgba(255, 255, 255, 0.05)';
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type.match('image.*')) {
                resizeImage(file, function (resizedDataUrl) {
                    coverPreview.src = resizedDataUrl;
                    coverPreview.style.display = 'block';
                    coverUploadArea.querySelector('i').style.display = 'none';
                    coverUploadArea.querySelector('span').style.display = 'none';
                    cancelUploadBtn.style.display = 'block';
                });
            }
        }
    });

    coverInput.addEventListener('change', function (e) {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            resizeImage(file, function (resizedDataUrl) {
                coverPreview.src = resizedDataUrl;
                coverPreview.style.display = 'block';
                coverUploadArea.querySelector('i').style.display = 'none';
                coverUploadArea.querySelector('span').style.display = 'none';
                cancelUploadBtn.style.display = 'block';
                hideUrlPreview();
            });
        }
    });

    cancelUploadBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        coverPreview.src = '';
        coverPreview.style.display = 'none';
        coverInput.value = '';
        coverUploadArea.querySelector('i').style.display = 'block';
        coverUploadArea.querySelector('span').style.display = 'block';
        cancelUploadBtn.style.display = 'none';
    });

    coverUrlInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        const url = coverUrlInput.value.trim();
        if (!url) {
            hideUrlPreview();
            return;
        }
        debounceTimer = setTimeout(() => {
            urlPreviewContainer.style.display = 'block';
            urlPreviewImage.style.display = 'none';
            previewError.style.display = 'none';
            previewLoading.style.display = 'flex';
            const tempImage = new Image();
            tempImage.onload = function() {
                urlPreviewImage.src = url;
                urlPreviewImage.style.display = 'block';
                previewLoading.style.display = 'none';
                previewError.style.display = 'none';
                coverPreview.style.display = 'none';
                cancelUploadBtn.style.display = 'none';
                coverUploadArea.querySelector('i').style.display = 'block';
                coverUploadArea.querySelector('span').style.display = 'block';
                coverInput.value = '';
            };
            tempImage.onerror = function() {
                previewLoading.style.display = 'none';
                previewError.style.display = 'flex';
                urlPreviewImage.style.display = 'none';
            };
            tempImage.src = url;
        }, 500);
    });

    function hideUrlPreview() {
        urlPreviewContainer.style.display = 'none';
        urlPreviewImage.style.display = 'none';
        previewLoading.style.display = 'none';
        previewError.style.display = 'none';
    }

    addGameBtn.addEventListener('click', function () {
        const name = gameNameInput.value.trim();
        if (!name) {
            alert(window.currentGameTranslations.alertEnterGameName);
            return;
        }
        let cover = '';
        if (coverPreview.style.display === 'block') {
            cover = coverPreview.src;
        } else if (urlPreviewImage.style.display === 'block') {
            cover = urlPreviewImage.src;
        } else if (coverUrlInput.value.trim()) {
            cover = coverUrlInput.value.trim();
        }
        games.push({ id: Date.now(), name: name, cover: cover, elo: 1200 });
        localStorage.setItem('games', JSON.stringify(games));
        gameNameInput.value = '';
        coverPreview.style.display = 'none';
        coverPreview.src = '';
        coverUrlInput.value = '';
        coverUploadArea.querySelector('i').style.display = 'block';
        coverUploadArea.querySelector('span').style.display = 'block';
        cancelUploadBtn.style.display = 'none';
        hideUrlPreview();
        renderGameList();
        updateStartButtonStateGame();
    });

    startSortingBtn.addEventListener('click', function () {
        if (games.length < 2) {
            alert(window.currentGameTranslations.alertNeedTwoGames);
            return;
        }
        // localStorage.removeItem(SAVED_PROGRESS_KEY_GAME); // Removed

        comparisonPairs = [];
        for (let i = 0; i < games.length; i++) {
            for (let j = i + 1; j < games.length; j++) {
                comparisonPairs.push([games[i], games[j]]);
            }
        }
        if (comparisonPairs.length === 0) {
            alert("Error: No comparison pairs generated for games.");
            return;
        }
        comparisonPairs.sort(() => Math.random() - 0.5);
        currentPairIndex = 0;
        totalComparisons = comparisonPairs.length;
        // totalComparisonsSpan.textContent = totalComparisons; // Removed
        // currentComparisonSpan.textContent = 1; // Removed
        isSortingInProgress = true;
        addPhase.classList.remove('active');
        comparePhase.classList.add('active');
        resultPhase.classList.remove('active');
        renderLiveRankingPreviewGame();
        nextComparisonGame();
    });

    // continueSortingBtnGame - REMOVED
    // saveProgressBtnGame - REMOVED

    stopSortingBtnGame.addEventListener('click', function() {
        isSortingInProgress = false;
        finishSortingGame();
    });

    resetBtn.addEventListener('click', function () {
        if (confirm(window.currentGameTranslations.confirmResetAllGames)) {
            games = [];
            localStorage.removeItem('games');
            // localStorage.removeItem(SAVED_PROGRESS_KEY_GAME); // Removed
            renderGameList();
            updateStartButtonStateGame();
        }
    });

    resetEloBtn.addEventListener('click', function() { // Added
        if (confirm(window.currentGameTranslations.confirmResetEloGame)) {
            games.forEach(game => game.elo = 1200);
            localStorage.setItem('games', JSON.stringify(games));
            renderGameList();
            if (comparePhase.classList.contains('active') || resultPhase.classList.contains('active')) {
                renderLiveRankingPreviewGame();
            }
            // alert(window.currentGameTranslations.alertEloResetGame);
        }
    });

    option1.addEventListener('click', () => { if (isSortingInProgress) handleComparisonChoiceGame(0); });
    option2.addEventListener('click', () => { if (isSortingInProgress) handleComparisonChoiceGame(1); });

    restartBtn.addEventListener('click', function () {
        if (games.length < 2) {
            resultPhase.classList.remove('active');
            addPhase.classList.add('active'); // 如果少于两个游戏，回到添加界面
            alert(window.currentGameTranslations.alertNeedTwoGames);
            updateStartButtonStateGame();
            return;
        }

        // 与 startSortingBtn 类似的核心逻辑
        comparisonPairs = [];
        for (let i = 0; i < games.length; i++) {
            for (let j = i + 1; j < games.length; j++) {
                comparisonPairs.push([games[i], games[j]]);
            }
        }

        if (comparisonPairs.length === 0) { // Should not happen if games.length >= 2
            resultPhase.classList.remove('active');
            addPhase.classList.add('active');
            alert(window.currentGameTranslations.alertNeedTwoGames); // Or a more specific error
            updateStartButtonStateGame();
            return;
        }

        comparisonPairs.sort(() => Math.random() - 0.5);
        currentPairIndex = 0;
        totalComparisons = comparisonPairs.length;
        isSortingInProgress = true;

        resultPhase.classList.remove('active');
        addPhase.classList.remove('active');
        comparePhase.classList.add('active');

        renderLiveRankingPreviewGame();
        nextComparisonGame();
    });

    backToAddBtn.addEventListener('click', () => {
        resultPhase.classList.remove('active');
        addPhase.classList.add('active');
        updateStartButtonStateGame();
    });

    function renderGameList() {
        gamesList.innerHTML = '';
        if (games.length === 0) {
            gamesList.innerHTML = `<p style="text-align:center; opacity:0.7; padding:30px;">${window.currentGameTranslations.emptyGameListPlaceholder}</p>`;
            return;
        }
        games.forEach((game, index) => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                ${game.cover ?
                    `<img src="${game.cover}" alt="${game.name}" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\\'default-cover\\'><i class=\\'fas fa-gamepad\\'></i></div>'">` :
                    `<div class="default-cover"><i class="fas fa-gamepad"></i></div>`
                }
                <div class="name">${game.name}</div>
                <div class="delete-btn" data-index="${index}">
                    <i class="fas fa-times"></i>
                </div>
            `;
            gamesList.appendChild(card);
            card.querySelector('.delete-btn').addEventListener('click', function (e) {
                e.stopPropagation();
                const indexToDelete = parseInt(this.getAttribute('data-index'));
                const deletedGameId = games[indexToDelete].id;
                games.splice(indexToDelete, 1);

                if (isSortingInProgress) { // Removed localStorage check
                    comparisonPairs = comparisonPairs.filter(pair => pair[0].id !== deletedGameId && pair[1].id !== deletedGameId);
                    totalComparisons = comparisonPairs.length;
                     if (currentPairIndex >= totalComparisons && totalComparisons > 0) {
                        currentPairIndex = totalComparisons -1;
                    } else if (totalComparisons === 0) {
                         currentPairIndex = 0;
                    }
                }
                localStorage.setItem('games', JSON.stringify(games));
                // if (isSortingInProgress) saveProgressGame(); // Removed
                renderGameList();
                updateStartButtonStateGame();
            });
        });
    }

    function updateStartButtonStateGame() { // Renamed
        startSortingBtn.disabled = games.length < 2;
        // continueSortingBtnGame logic removed
    }

    function nextComparisonGame() {
        if (!isSortingInProgress || comparisonPairs.length === 0) {
            if (isSortingInProgress && games.length >=2 && comparisonPairs.length === 0) {
                for (let i = 0; i < games.length; i++) {
                    for (let j = i + 1; j < games.length; j++) {
                        if (!comparisonPairs.find(p => (p[0].id === games[i].id && p[1].id === games[j].id) || (p[0].id === games[j].id && p[1].id === games[i].id) )) {
                             comparisonPairs.push([games[i], games[j]]);
                        }
                    }
                }
                comparisonPairs.sort(() => Math.random() - 0.5);
                currentPairIndex = 0;
                totalComparisons = comparisonPairs.length;
                if (totalComparisons === 0) {
                    finishSortingGame(); return;
                }
            } else if (isSortingInProgress) {
                finishSortingGame(); return;
            } else {
                return;
            }
        }

        if (currentPairIndex >= totalComparisons) {
            comparisonPairs.sort(() => Math.random() - 0.5);
            currentPairIndex = 0;
        }

        if (currentPairIndex >= comparisonPairs.length && comparisonPairs.length > 0) {
            currentPairIndex = 0;
        }
        if (comparisonPairs.length === 0 && games.length >=2) {
            finishSortingGame(); return;
        }
         if (comparisonPairs.length === 0 && games.length < 2) {
            isSortingInProgress = false;
            comparePhase.classList.remove('active');
            addPhase.classList.add('active');
            alert(window.currentGameTranslations.alertNeedTwoGames);
            updateStartButtonStateGame();
            return;
        }

        // Progress display logic removed
        // if(progressTextElem) progressTextElem.textContent = progress; // Removed
        // currentComparisonSpan.textContent = currentPairIndex + 1; // Removed
        // totalComparisonsSpan.textContent = totalComparisons; // Removed
        const [gameA, gameB] = comparisonPairs[currentPairIndex];
        updateGameOption(option1, gameA);
        updateGameOption(option2, gameB);
        renderLiveRankingPreviewGame();
    }

    function updateGameOption(optionElement, game) {
        const imageContainer = optionElement.querySelector('.image-container');
        const nameElement = optionElement.querySelector('.name');
        if (!game) {
            nameElement.textContent = "Error";
            imageContainer.innerHTML = `<div class="default-cover"><i class="fas fa-exclamation-triangle"></i></div>`;
            return;
        }
        nameElement.textContent = game.name;
        if (game.cover) {
            imageContainer.innerHTML = `<img src="${game.cover}" alt="${game.name}" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\\'default-cover\\'><i class=\\'fas fa-gamepad\\'></i></div>'">`;
        } else {
            imageContainer.innerHTML = `<div class="default-cover"><i class="fas fa-gamepad"></i></div>`;
        }
    }

    function handleComparisonChoiceGame(winnerIndex) {
        if (currentPairIndex >= comparisonPairs.length) {
             console.error("Attempted to handle choice for an invalid pair index in games.");
             nextComparisonGame(); return;
        }
        const [gameA, gameB] = comparisonPairs[currentPairIndex];
        if (!gameA || gameA.elo === undefined || !gameB || gameB.elo === undefined) {
            console.error("Invalid game data in comparison pair:", gameA, gameB);
            currentPairIndex++;
            nextComparisonGame();
            return;
        }
        const eloA = gameA.elo;
        const eloB = gameB.elo;
        const expectedA = 1 / (1 + Math.pow(10, (eloB - eloA) / 400));
        const expectedB = 1 / (1 + Math.pow(10, (eloA - eloB) / 400));
        let scoreA, scoreB;
        if (winnerIndex === 0) { scoreA = 1; scoreB = 0; } else { scoreA = 0; scoreB = 1; }
        gameA.elo = Math.round(eloA + K_FACTOR * (scoreA - expectedA));
        gameB.elo = Math.round(eloB + K_FACTOR * (scoreB - expectedB));
        const gameAIndex = games.findIndex(g => g.id === gameA.id);
        const gameBIndex = games.findIndex(g => g.id === gameB.id);
        if(gameAIndex !== -1) games[gameAIndex].elo = gameA.elo;
        if(gameBIndex !== -1) games[gameBIndex].elo = gameB.elo;
        localStorage.setItem('games', JSON.stringify(games));
        currentPairIndex++;
        renderLiveRankingPreviewGame();
        nextComparisonGame();
    }

    function finishSortingGame() {
        isSortingInProgress = false;
        const finalRankedGames = [...games].sort((a, b) => b.elo - a.elo);
        renderRankingListGame(finalRankedGames);
        comparePhase.classList.remove('active');
        resultPhase.classList.add('active');
        // localStorage.removeItem(SAVED_PROGRESS_KEY_GAME); // Removed
        updateStartButtonStateGame();
    }

    function renderLiveRankingPreviewGame() {
        if (!liveRankingListGame) return;
        liveRankingListGame.innerHTML = '';
        const rankedGamesPreview = [...games].sort((a, b) => b.elo - a.elo);
        rankedGamesPreview.forEach((game, index) => {
            const item = document.createElement('div');
            item.className = 'ranking-item';
            item.innerHTML = `
                <div class="rank">${index + 1}</div>
                <div class="game-cover">
                     ${game.cover ?
                        `<img src="${game.cover}" alt="${game.name}" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\\'default-cover\\'><i class=\\'fas fa-gamepad\\'></i></div>'">` :
                        `<div class="default-cover"><i class="fas fa-gamepad"></i></div>`
                    }
                </div>
                <div class="game-info">
                    <div class="name">${game.name} (Elo: ${game.elo})</div>
                </div>
            `;
            liveRankingListGame.appendChild(item);
        });
    }

    function renderRankingListGame(rankedGames) { // Renamed to avoid conflict if ever merged
        rankingList.innerHTML = ''; // Assuming 'rankingList' is the ID for the final result list
        rankedGames.forEach((game, index) => {
            const rankClass = index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : '';
            const li = document.createElement('div');
            li.className = 'ranking-item';
            li.innerHTML = `
                <div class="rank ${rankClass}">${index + 1}</div>
                <div class="game-cover">
                    ${game.cover ?
                        `<img src="${game.cover}" alt="${game.name}" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\\'default-cover\\'><i class=\\'fas fa-gamepad\\'></i></div>'">` :
                        `<div class="default-cover"><i class="fas fa-gamepad"></i></div>`
                    }
                </div>
                <div class="game-info">
                    <div class="name">${game.name} (Elo: ${game.elo})</div>
                </div>
            `;
            rankingList.appendChild(li);
        });

        const lang = (navigator.language || navigator.userLanguage).startsWith('zh') ? 'zh' : 'en';

        // --- New AI Review Prompt Section for Games ---
        const promptContainer = document.getElementById('prompt-output-container-game') || document.createElement('div'); // Use specific ID
        if (!document.getElementById('prompt-output-container-game')) {
            promptContainer.id = 'prompt-output-container-game';
            promptContainer.className = 'prompt-output-container'; // Re-use class if styles are shared
            const resultControls = resultPhase.querySelector('.result-controls'); // Assuming .result-controls holds restart/back buttons
            if (resultControls) {
                resultPhase.insertBefore(promptContainer, resultControls);
            } else {
                resultPhase.appendChild(promptContainer);
            }
        }
        promptContainer.innerHTML = ''; // Clear previous content

        const buttonsGroup = document.createElement('div');
        buttonsGroup.className = 'review-buttons-group';

        const sharpReviewBtn = document.createElement('button');
        sharpReviewBtn.id = 'sharp-review-btn-game';
        sharpReviewBtn.className = 'btn btn-primary';
        sharpReviewBtn.innerHTML = `<i class="fas fa-bolt"></i> <span>${window.currentGameTranslations.sharpReviewBtnTextGame}</span>`;

        const seriousReviewBtn = document.createElement('button');
        seriousReviewBtn.id = 'serious-review-btn-game';
        seriousReviewBtn.className = 'btn btn-secondary';
        seriousReviewBtn.innerHTML = `<i class="fas fa-comment-dots"></i> <span>${window.currentGameTranslations.seriousReviewBtnTextGame}</span>`;

        const copyToAiSpan = document.createElement('span');
        copyToAiSpan.className = 'copy-to-ai-text';
        copyToAiSpan.textContent = ` ${window.currentGameTranslations.copyToAiTextGame}`;

        buttonsGroup.appendChild(sharpReviewBtn);
        buttonsGroup.appendChild(seriousReviewBtn);
        buttonsGroup.appendChild(copyToAiSpan);
        promptContainer.appendChild(buttonsGroup);

        const promptTextarea = document.createElement('textarea');
        promptTextarea.id = 'prompt-output-textarea-game'; // Specific ID
        promptTextarea.readOnly = true;
        promptTextarea.onclick = function() { this.select(); };
        // Use window.currentLang here
        promptTextarea.placeholder = window.currentLang === 'zh' ? '点击上方按钮生成评价提示，内容将显示在此处。' : 'Click a button above to generate the review prompt, it will be displayed here.';
        promptContainer.appendChild(promptTextarea);

        const rankingText = rankedGames.map((game, index) => `${index + 1}. ${game.name} (Elo: ${game.elo})`).join('\n');

        function handleCopyPromptGame(buttonElement, promptText, originalText, textareaElement) {
            textareaElement.value = promptText;
            navigator.clipboard.writeText(promptText).then(() => {
                const textSpan = buttonElement.querySelector('span');
                if (textSpan) textSpan.textContent = window.currentGameTranslations.copiedSuccessText.replace('!', '');
                else buttonElement.textContent = window.currentGameTranslations.copiedSuccessText;

                const originalColor = buttonElement.style.color;
                const originalBorderColor = buttonElement.style.borderColor;
                buttonElement.style.color = '#4caf50';
                buttonElement.style.borderColor = '#4caf50';

                setTimeout(() => {
                    if (textSpan) textSpan.textContent = originalText;
                    else buttonElement.textContent = originalText;
                    buttonElement.style.color = originalColor;
                    buttonElement.style.borderColor = originalBorderColor;
                }, 2000);
            }).catch(err => {
                console.error(window.currentGameTranslations.alertCopyFailed, err);
                alert(window.currentGameTranslations.alertCopyFailed);
            });
        }

        sharpReviewBtn.addEventListener('click', () => {
            const promptTemplate = window.currentGameTranslations.promptRequestReviewGameTemplate;
            const promptText = promptTemplate.replace('{ranking}', rankingText);
            const originalButtonText = window.currentGameTranslations.sharpReviewBtnTextGame;
            handleCopyPromptGame(sharpReviewBtn, promptText, originalButtonText, promptTextarea);
        });

        seriousReviewBtn.addEventListener('click', () => {
            const promptTemplate = window.currentGameTranslations.promptRequestSeriousReviewGameTemplate;
            const promptText = promptTemplate.replace('{ranking}', rankingText);
            const originalButtonText = window.currentGameTranslations.seriousReviewBtnTextGame;
            handleCopyPromptGame(seriousReviewBtn, promptText, originalButtonText, promptTextarea);
        });

        // Set initial content for textarea (e.g., the sharp review prompt)
        const initialPromptTemplate = window.currentGameTranslations.promptRequestReviewGameTemplate;
        promptTextarea.value = initialPromptTemplate.replace('{ranking}', rankingText);
    }

    // saveProgressGame - REMOVED
    // loadProgressGame - REMOVED
});
