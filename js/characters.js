// Internationalization Script for characters.html
const charI18nData = {
    'en': {
        pageTitleChar: "Character Sorting System",
        headerTitleChar: "Character Sorting System",
        headerSubtitleChar: "Add your favorite characters and rank them through pairwise comparisons",
        tutorialTitleTextChar: "Instructions",
        tutorialLi1TextChar: "Add Characters: Enter character name, and upload avatar or use an external image link.",
        tutorialLi2TextChar: "Avatar Optional: A default icon will be used if no avatar is added.",
        tutorialLi3TextChar: "Local Storage: All data is saved in your browser and won't be lost on refresh.",
        tutorialLi4TextChar: "Sorting Phase: The system will show two characters; choose the one you prefer.",
        tutorialLi6TextChar: "Elo Rating System: This system calculates the relative preference levels for items (characters, games, ACN works) by comparing them in pairs. Each item has an Elo score that updates after each comparison.",
        tutorialLi7TextChar: "Powered by DeepSeek R1 & Gemini 2.5 pro",
        labelItemNameChar: "Character Name *",
        inputItemNamePlaceholderChar: "Enter character name",
        labelUploadCoverChar: "Upload Avatar",
        uploadAreaSpanChar: "Click to upload image or drag and drop file here",
        labelUrlCoverChar: "Or use Image URL",
        inputAvatarUrlPlaceholderChar: "Enter avatar image URL",
        previewLoadingTextChar: " Image loading...",
        previewErrorTextChar: "Image failed to load, please check URL",
        addItemBtnTextChar: "Add Character",
        startSortingBtnTextChar: "Start Sorting",
        resetAllBtnTextChar: "Clear Characters List",
        backToHomeLinkChar: "Back to Home",
        importJsonBtnTextChar: "Import Character List",
        exportJsonBtnTextChar: "Export Character List",
        comparePhaseTitleChar: "Which character do you prefer?",
        comparePhaseSubtitleChar: "Click to select your preferred character",
        compareInfoPrefixChar: "Current progress: ",
        compareInfoSuffixChar: " comparisons",
        progressBarTextPrefixChar: "Comparison progress: ",
        resultPhaseTitleChar: "Character Sorting Results",
        resultPhaseSubtitleChar: "Based on your selections, here is the character preference ranking",
        reviewSectionTitleChar: "AI Review Prompts", // Changed from promptTitleTextChar
        sharpReviewBtnTextChar: "Sharp Review",
        seriousReviewBtnTextChar: "Serious Review",
        copyToAiTextChar: "(Copy and send to AI)",
        copyBtnTextChar: " Copy", // Kept for now, but new buttons will have their own text
        restartBtnTextChar: "Continue sorting",
        backToAddBtnTextChar: "Back to Modify",
        // Dynamic texts (will require JS modification to use)
        alertEnterCharacterName: "Please enter the character name",
        alertNeedTwoCharacters: "You need to add at least two characters to sort",
        confirmResetAllCharacters: "Are you sure you want to delete all characters? This action cannot be undone.",
        alertImportError: "Error importing JSON. Please check the file format.",
        alertNoFileSelected: "No file selected.",
        alertCopyFailed: "Copy failed, your browser may not support this feature.",
        copiedSuccessText: "Copied!",
        emptyCharacterListPlaceholder: "No characters added yet",
        promptRequestReviewCharTemplate: "You are now a tsundere girl who is proficient in the acg field. I have ranked my favorite characters. Please review them:\n{ranking}",
        promptRequestSeriousReviewCharTemplate: "You are now an ACG enthusiast. I have ranked my favorite characters. Please provide a detailed review:\n{ranking}",
        continueSortingBtnTextChar: "Continue Last Sort",
        stopSortingBtnTextChar: "Stop Sorting & View Results",
        saveProgressBtnTextChar: "Save Progress",
        liveRankingTitleChar: "Live Ranking",
        alertProgressSaved: "Progress saved successfully!",
        alertProgressLoaded: "Progress loaded successfully!",
        alertNoSavedProgress: "No saved progress found.",
        confirmOverwriteProgress: "Starting a new sort will overwrite any saved progress. Continue?",
        resetEloBtnTextChar: "Reset Elo Scores",
        confirmResetElo: "Are you sure you want to reset all Elo scores? This will reset them to the default value.",
        alertEloReset: "Elo scores have been reset."
    },
    'zh': {
        pageTitleChar: "角色排序系统",
        headerTitleChar: "角色排序系统",
        headerSubtitleChar: "添加你喜爱的角色，通过两两比较得出最终排名",
        tutorialTitleTextChar: "使用说明",
        tutorialLi1TextChar: "添加角色：输入角色名称，并上传头像或使用外链图片",
        tutorialLi2TextChar: "头像可选：不添加头像将使用默认图标",
        tutorialLi3TextChar: "本地存储：所有数据保存在浏览器中，刷新页面不会丢失",
        tutorialLi4TextChar: "排序阶段：系统会展示两个角色，选择你更喜欢的角色",
        tutorialLi6TextChar: "Elo等级分系统：本系统通过两两对比来计算项目（角色、游戏、ACN作品）的相对喜好程度。每个项目都有一个 Elo 分数，该分数在每次比较后更新。",
        tutorialLi7TextChar: "Powered by DeepSeek R1 & Gemini 2.5 pro",
        labelItemNameChar: "角色名称 *",
        inputItemNamePlaceholderChar: "输入角色名称",
        labelUploadCoverChar: "上传头像",
        uploadAreaSpanChar: "点击上传图片或拖放文件到此处",
        labelUrlCoverChar: "或使用图片链接",
        inputAvatarUrlPlaceholderChar: "输入头像图片URL",
        previewLoadingTextChar: " 图片加载中...",
        previewErrorTextChar: "图片加载失败，请检查URL",
        addItemBtnTextChar: "添加角色",
        startSortingBtnTextChar: "开始排序",
        resetAllBtnTextChar: "清空角色列表",
        backToHomeLinkChar: "返回首页",
        importJsonBtnTextChar: "导入角色列表",
        exportJsonBtnTextChar: "导出角色列表",
        comparePhaseTitleChar: "你更喜欢哪个角色？",
        comparePhaseSubtitleChar: "点击选择你更喜欢的角色",
        compareInfoPrefixChar: "当前进度: ",
        compareInfoSuffixChar: " 次比较",
        progressBarTextPrefixChar: "比较进度: ",
        resultPhaseTitleChar: "角色排序结果",
        resultPhaseSubtitleChar: "根据你的选择，以下是角色喜爱度排名",
        reviewSectionTitleChar: "AI 评价提示", // Changed from promptTitleTextChar
        sharpReviewBtnTextChar: "请求锐评",
        seriousReviewBtnTextChar: "正经评论",
        copyToAiTextChar: "（复制并发送给 AI）",
        copyBtnTextChar: " 复制", // Kept for now, but new buttons will have their own text
        restartBtnTextChar: "继续排序",
        backToAddBtnTextChar: "返回修改",
        alertEnterCharacterName: "请输入角色名称",
        alertNeedTwoCharacters: "至少需要添加两个角色才能排序",
        confirmResetAllCharacters: "确定要删除所有角色吗？此操作不可撤销。",
        alertImportError: "导入JSON失败，请检查文件格式。",
        alertNoFileSelected: "未选择文件。",
        alertCopyFailed: "复制失败，您的浏览器可能不支持此功能。",
        copiedSuccessText: "已复制!",
        emptyCharacterListPlaceholder: "还没有添加任何角色",
        promptRequestReviewCharTemplate: "你现在是一个精通acg领域的雌小鬼。我给自己喜欢的角色进行了一个排行，你来进行评价：\n{ranking}",
        promptRequestSeriousReviewCharTemplate: "你现在是一个精通acg领域的爱好者。我给自己喜欢的角色进行了一个排行，你来进行详细评价：\n{ranking}",
        continueSortingBtnTextChar: "继续上次排序",
        stopSortingBtnTextChar: "停止排序并查看结果",
        saveProgressBtnTextChar: "保存进度",
        liveRankingTitleChar: "实时排名",
        alertProgressSaved: "进度已保存！",
        alertProgressLoaded: "已加载保存的进度！",
        alertNoSavedProgress: "未找到已保存的进度。",
        confirmOverwriteProgress: "开始新的排序将覆盖任何已保存的进度。是否继续？",
        resetEloBtnTextChar: "重置Elo分数",
        confirmResetElo: "确定要重置所有Elo分数吗？这将把它们恢复到默认值。",
        alertEloReset: "Elo分数已重置。"
    }
};

function applyCharTranslations() {
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.startsWith('zh') ? 'zh' : 'en';
    const texts = charI18nData[lang];

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    document.title = texts.pageTitleChar;

    const elementsToTranslate = {
        'header-title-char': texts.headerTitleChar,
        'header-subtitle-char': texts.headerSubtitleChar,
        'tutorial-title-text-char': texts.tutorialTitleTextChar,
        'tutorial-li-1-text-char': texts.tutorialLi1TextChar,
        'tutorial-li-2-text-char': texts.tutorialLi2TextChar,
        'tutorial-li-3-text-char': texts.tutorialLi3TextChar,
        'tutorial-li-4-text-char': texts.tutorialLi4TextChar,
        'tutorial-li-6-text-char': texts.tutorialLi6TextChar,
        'tutorial-li-7-text-char': texts.tutorialLi7TextChar,
        'label-item-name-char': texts.labelItemNameChar,
        'label-upload-cover-char': texts.labelUploadCoverChar,
        'upload-area-span-char': texts.uploadAreaSpanChar,
        'label-url-cover-char': texts.labelUrlCoverChar,
        'preview-loading-text-char': texts.previewLoadingTextChar,
        'preview-error-text-char': texts.previewErrorTextChar,
        'add-item-btn-text-char': texts.addItemBtnTextChar,
        'start-sorting-btn-text-char': texts.startSortingBtnTextChar,
        'reset-all-btn-text-char': texts.resetAllBtnTextChar,
        'back-to-home-link-char': texts.backToHomeLinkChar,
        'import-json-btn-text-char': texts.importJsonBtnTextChar,
        'export-json-btn-text-char': texts.exportJsonBtnTextChar,
        'compare-phase-title-char': texts.comparePhaseTitleChar,
        'compare-phase-subtitle-char': texts.comparePhaseSubtitleChar,
        'compare-info-prefix-char': texts.compareInfoPrefixChar,
        'compare-info-suffix-char': texts.compareInfoSuffixChar,
        'progress-bar-text-prefix-char': texts.progressBarTextPrefixChar,
        'result-phase-title-char': texts.resultPhaseTitleChar,
        'result-phase-subtitle-char': texts.resultPhaseSubtitleChar,
        'prompt-title-text-char': texts.reviewSectionTitleChar, // Updated to use new key
        // 'copy-btn-text-char': texts.copyBtnTextChar, // Will be handled dynamically for new buttons
        'restart-btn-text-char': texts.restartBtnTextChar,
        'back-to-add-btn-text-char': texts.backToAddBtnTextChar,
        // New elements for translation
        // 'continue-sorting-btn-text-char': texts.continueSortingBtnTextChar, // Removed
        'stop-sorting-btn-text-char': texts.stopSortingBtnTextChar,
        // 'save-progress-btn-text-char': texts.saveProgressBtnTextChar, // Removed
        'live-ranking-title-char': texts.liveRankingTitleChar,
        'reset-elo-btn-text-char': texts.resetEloBtnTextChar
    };

    for (const id in elementsToTranslate) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = elementsToTranslate[id];
        }
    }

    const characterNameInput = document.getElementById('character-name');
    if (characterNameInput) characterNameInput.placeholder = texts.inputItemNamePlaceholderChar;
    const avatarUrlInput = document.getElementById('avatar-url');
    if (avatarUrlInput) avatarUrlInput.placeholder = texts.inputAvatarUrlPlaceholderChar;

    window.currentCharTranslations = texts; // Store for main script if needed
    window.currentLang = lang; // Store current language globally
}

document.addEventListener('DOMContentLoaded', applyCharTranslations);

// All JavaScript from the original file is placed here
document.addEventListener('DOMContentLoaded', function () {
    // Global variables
    let characters = JSON.parse(localStorage.getItem('characters')) || [];
    characters.forEach(char => { // Ensure all characters have an elo score
        if (char.elo === undefined) {
            char.elo = 1200;
        }
    });
    let comparisonPairs = [];
    let currentPairIndex = 0;
    let totalComparisons = 0;
    const K_FACTOR = 32;
    let debounceTimer;
    let isSortingInProgress = false; // To track if sorting is active
    // const SAVED_PROGRESS_KEY = 'characterSortProgress'; // Removed

    // DOM elements
    const resizerCanvas = document.getElementById('image-resizer-canvas');
    const addPhase = document.getElementById('add-phase');
    const comparePhase = document.getElementById('compare-phase');
    const resultPhase = document.getElementById('result-phase');
    const charactersList = document.getElementById('characters-list');
    const characterNameInput = document.getElementById('character-name');
    const avatarInput = document.getElementById('avatar-input');
    const avatarUrlInput = document.getElementById('avatar-url');
    const avatarPreview = document.getElementById('avatar-preview');
    const avatarUploadArea = document.getElementById('avatar-upload-area');
    const cancelUploadBtn = document.getElementById('cancel-upload');
    const addCharacterBtn = document.getElementById('add-character-btn');
    const startSortingBtn = document.getElementById('start-sorting-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resetEloBtn = document.getElementById('reset-elo-btn'); // New button
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    // progressFill, progressText, currentComparisonSpan, totalComparisonsSpan are removed
    const rankingList = document.getElementById('ranking-list');
    const restartBtn = document.getElementById('restart-btn');
    const backToAddBtn = document.getElementById('back-to-add-btn');
    const urlPreviewContainer = document.querySelector('.url-preview-container');
    const urlPreviewImage = document.getElementById('url-preview-image');
    const previewLoading = document.getElementById('preview-loading');
    const previewError = document.getElementById('preview-error');
    // const promptOutput = document.getElementById('prompt-output'); // Will be removed/replaced
    // const copyBtn = document.getElementById('copy-btn'); // Will be removed/replaced
    const importJsonInput = document.getElementById('import-json-input');
    const importJsonBtn = document.getElementById('import-json-btn');
    const exportJsonBtn = document.getElementById('export-json-btn');
    // New DOM Elements
    // const continueSortingBtn = document.getElementById('continue-sorting-btn'); // Removed
    const stopSortingBtn = document.getElementById('stop-sorting-btn');
    // const saveProgressBtn = document.getElementById('save-progress-btn'); // Removed
    const liveRankingList = document.getElementById('live-ranking-list');


    // Initialize page
    function init() {
        renderCharacterList();
        updateStartButtonState(); // Changed from updateStartAndContinueButtonState
        // Ensure translations are applied if not already
        if (!window.currentCharTranslations) {
            applyCharTranslations();
        }
    }
    // 辅助函数：压缩和调整图片尺寸
    function resizeImage(file, callback) {
        const max_size = 512; // 设置压缩后的最大尺寸
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

                // 使用 jpeg 格式并设置压缩质量
                const dataUrl = resizerCanvas.toDataURL('image/jpeg', 0.9);
                callback(dataUrl);
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
    init(); // Call the new init function

    // Import JSON
    importJsonBtn.addEventListener('click', () => {
        importJsonInput.click();
    });

    importJsonInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) {
            alert(window.currentCharTranslations.alertNoFileSelected);
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                if (Array.isArray(importedData)) {
                    // Clear existing characters before importing
                    characters = [];
                    importedData.forEach(item => {
                        if (item && typeof item.name === 'string' && (typeof item.avatar === 'string' || typeof item.url === 'string')) {
                            characters.push({
                                id: Date.now() + Math.random(), // Ensure unique ID
                                name: item.name,
                                avatar: item.avatar || item.url || '',
                                elo: item.elo !== undefined ? parseInt(item.elo, 10) : 1200 // Use imported Elo or default
                            });
                        }
                    });
                    localStorage.setItem('characters', JSON.stringify(characters));
                    // localStorage.removeItem(SAVED_PROGRESS_KEY); // Removed
                    renderCharacterList();
                    updateStartButtonState();
                } else {
                    alert(window.currentCharTranslations.alertImportError);
                }
            } catch (error) {
                console.error("Error parsing JSON:", error);
                alert(window.currentCharTranslations.alertImportError);
            }
            // Reset file input to allow importing the same file again
            importJsonInput.value = '';
        };
        reader.readAsText(file);
    });

    // Export JSON
    exportJsonBtn.addEventListener('click', () => {
        const dataToExport = characters.map(char => ({ name: char.name, avatar: char.avatar, elo: char.elo })); // Added elo
        const jsonString = JSON.stringify(dataToExport, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'characters_export.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });


    // Avatar upload handling
    avatarUploadArea.addEventListener('click', () => {
        avatarInput.click();
    });

    // Drag and drop upload
    avatarUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        avatarUploadArea.style.borderColor = '#ff8a00';
        avatarUploadArea.style.background = 'rgba(255, 138, 0, 0.1)';
    });

    avatarUploadArea.addEventListener('dragleave', () => {
        avatarUploadArea.style.borderColor = '#666';
        avatarUploadArea.style.background = 'rgba(255, 255, 255, 0.05)';
    });

    avatarUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        avatarUploadArea.style.borderColor = '#666';
        avatarUploadArea.style.background = 'rgba(255, 255, 255, 0.05)';

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type.match('image.*')) {
                // 使用新的压缩函数
                resizeImage(file, function (resizedDataUrl) {
                    avatarPreview.src = resizedDataUrl;
                    avatarPreview.style.display = 'block';
                    avatarUploadArea.querySelector('i').style.display = 'none';
                    avatarUploadArea.querySelector('span').style.display = 'none';
                    cancelUploadBtn.style.display = 'block';
                });
            }
        }
    });

    avatarInput.addEventListener('change', function (e) {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            // 使用新的压缩函数
            resizeImage(file, function (resizedDataUrl) {
                avatarPreview.src = resizedDataUrl;
                avatarPreview.style.display = 'block';
                avatarUploadArea.querySelector('i').style.display = 'none';
                avatarUploadArea.querySelector('span').style.display = 'none';
                cancelUploadBtn.style.display = 'block';

                // 隐藏URL预览
                hideUrlPreview();
            });
        }
    });

    // Cancel upload
    cancelUploadBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        avatarPreview.src = '';
        avatarPreview.style.display = 'none';
        avatarInput.value = '';
        avatarUploadArea.querySelector('i').style.display = 'block';
        avatarUploadArea.querySelector('span').style.display = 'block';
        cancelUploadBtn.style.display = 'none';
    });

    avatarUrlInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        const url = avatarUrlInput.value.trim();

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

                avatarPreview.style.display = 'none';
                cancelUploadBtn.style.display = 'none';
                avatarUploadArea.querySelector('i').style.display = 'block';
                avatarUploadArea.querySelector('span').style.display = 'block';
                avatarInput.value = '';
            };

            tempImage.onerror = function() {
                previewLoading.style.display = 'none';
                previewError.style.display = 'flex';
                urlPreviewImage.style.display = 'none';
            };

            tempImage.src = url;
        }, 500); // 延迟500毫秒触发，防止频繁请求
    });

    function hideUrlPreview() {
        urlPreviewContainer.style.display = 'none';
        urlPreviewImage.style.display = 'none';
        previewLoading.style.display = 'none';
        previewError.style.display = 'none';
    }

    // Add character
    addCharacterBtn.addEventListener('click', function () {
        const name = characterNameInput.value.trim();

        if (!name) {
            alert(window.currentCharTranslations.alertEnterCharacterName);
            return;
        }

        let avatar = '';
        if (avatarPreview.style.display === 'block') {
            avatar = avatarPreview.src;
        } else if (urlPreviewImage.style.display === 'block') {
            avatar = urlPreviewImage.src;
        } else if (avatarUrlInput.value.trim()) {
            avatar = avatarUrlInput.value.trim();
        }

        characters.push({
            id: Date.now(),
            name: name,
            avatar: avatar,
            elo: 1200 // Initial Elo rating
        });

        localStorage.setItem('characters', JSON.stringify(characters));

        characterNameInput.value = '';
        avatarPreview.style.display = 'none';
        avatarPreview.src = '';
        avatarUrlInput.value = '';
        avatarUploadArea.querySelector('i').style.display = 'block';
        avatarUploadArea.querySelector('span').style.display = 'block';
        cancelUploadBtn.style.display = 'none';
        hideUrlPreview();

        renderCharacterList();
        updateStartButtonState();
    });

    // Start sorting
    startSortingBtn.addEventListener('click', function () {
        if (characters.length < 2) {
            alert(window.currentCharTranslations.alertNeedTwoCharacters);
            return;
        }

        // localStorage.removeItem(SAVED_PROGRESS_KEY); // Removed

        // Reset ELOs for a fresh sort if desired, or keep them to refine
        // For now, let's keep existing ELOs to allow refinement.
        // characters.forEach(char => char.elo = 1200);

        // Generate all unique pairs for comparison
        comparisonPairs = [];
        for (let i = 0; i < characters.length; i++) {
            for (let j = i + 1; j < characters.length; j++) {
                comparisonPairs.push([characters[i], characters[j]]);
            }
        }

        if (comparisonPairs.length === 0) { // Should not happen if characters.length >= 2
            alert("Error: No comparison pairs generated.");
            return;
        }

        comparisonPairs.sort(() => Math.random() - 0.5); // Shuffle pairs

        currentPairIndex = 0;
        totalComparisons = comparisonPairs.length;
        // totalComparisonsSpan.textContent = totalComparisons; // Removed
        // currentComparisonSpan.textContent = 1; // Removed
        isSortingInProgress = true;

        addPhase.classList.remove('active');
        comparePhase.classList.add('active');
        resultPhase.classList.remove('active');

        renderLiveRankingPreview();
        nextComparison();
    });

    // Continue Sorting - REMOVED
    // saveProgressBtn - REMOVED

    // Stop Sorting
    stopSortingBtn.addEventListener('click', function() {
        isSortingInProgress = false;
        finishSorting();
    });


    // Reset button
    resetBtn.addEventListener('click', function () {
        if (confirm(window.currentCharTranslations.confirmResetAllCharacters)) {
            characters = [];
            localStorage.removeItem('characters');
            // localStorage.removeItem(SAVED_PROGRESS_KEY); // Removed
            renderCharacterList();
            updateStartButtonState();
        }
    });

    // Reset Elo Scores Button
    resetEloBtn.addEventListener('click', function() {
        if (confirm(window.currentCharTranslations.confirmResetElo)) {
            characters.forEach(char => char.elo = 1200); // Reset to default Elo
            localStorage.setItem('characters', JSON.stringify(characters));
            renderCharacterList(); // Re-render list in add phase
            if (comparePhase.classList.contains('active') || resultPhase.classList.contains('active')) {
                renderLiveRankingPreview(); // Re-render live ranking if visible
            }
            // alert(window.currentCharTranslations.alertEloReset);
        }
    });

    // Comparison choice
    option1.addEventListener('click', function () {
        if (!isSortingInProgress) return;
        handleComparisonChoice(0);
    });

    option2.addEventListener('click', function () {
        if (!isSortingInProgress) return;
        handleComparisonChoice(1);
    });

    // Restart
    restartBtn.addEventListener('click', function () {
        if (characters.length < 2) {
            resultPhase.classList.remove('active');
            addPhase.classList.add('active'); // 如果少于两个角色，回到添加界面
            alert(window.currentCharTranslations.alertNeedTwoCharacters);
            updateStartButtonState();
            return;
        }

        // 与 startSortingBtn 类似的核心逻辑
        comparisonPairs = [];
        for (let i = 0; i < characters.length; i++) {
            for (let j = i + 1; j < characters.length; j++) {
                comparisonPairs.push([characters[i], characters[j]]);
            }
        }

        if (comparisonPairs.length === 0) { // Should not happen if characters.length >= 2
            resultPhase.classList.remove('active');
            addPhase.classList.add('active');
            alert(window.currentCharTranslations.alertNeedTwoCharacters); // Or a more specific error
            updateStartButtonState();
            return;
        }

        comparisonPairs.sort(() => Math.random() - 0.5);
        currentPairIndex = 0;
        totalComparisons = comparisonPairs.length;
        isSortingInProgress = true;

        resultPhase.classList.remove('active');
        addPhase.classList.remove('active');
        comparePhase.classList.add('active');

        renderLiveRankingPreview();
        nextComparison();
    });

    // Back to add
    backToAddBtn.addEventListener('click', function () {
        resultPhase.classList.remove('active');
        addPhase.classList.add('active');
        updateStartButtonState();
    });

    // Helper: Render character list
    function renderCharacterList() {
        charactersList.innerHTML = '';

        if (characters.length === 0) {
            charactersList.innerHTML = `<p style="text-align:center; opacity:0.7; padding:30px;">${window.currentCharTranslations.emptyCharacterListPlaceholder}</p>`;
            return;
        }

        characters.forEach((character, index) => {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.innerHTML = `
                ${character.avatar ?
                    `<img src="${character.avatar}" alt="${character.name}" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\\'default-avatar\\'><i class=\\'fas fa-user\\'></i></div>'">` :
                    `<div class="default-avatar"><i class="fas fa-user"></i></div>`
                }
                <div class="name">${character.name}</div>
                <div class="delete-btn" data-index="${index}">
                    <i class="fas fa-times"></i>
                </div>
            `;

            charactersList.appendChild(card);

            const deleteBtn = card.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                const indexToDelete = parseInt(this.getAttribute('data-index'));
                const deletedCharId = characters[indexToDelete].id;
                characters.splice(indexToDelete, 1);

                // If sorting was in progress, remove deleted character from pairs
                if (isSortingInProgress) { // Removed localStorage check
                    comparisonPairs = comparisonPairs.filter(pair => pair[0].id !== deletedCharId && pair[1].id !== deletedCharId);
                    totalComparisons = comparisonPairs.length;
                    if (currentPairIndex >= totalComparisons && totalComparisons > 0) {
                        currentPairIndex = totalComparisons - 1;
                    } else if (totalComparisons === 0) {
                         currentPairIndex = 0;
                    }
                }

                localStorage.setItem('characters', JSON.stringify(characters));
                // if (isSortingInProgress) saveProgress(); // Removed saveProgress call

                renderCharacterList();
                updateStartButtonState(); // Changed
            });
        });
    }

    // Helper: Update start button state (removed continue button logic)
    function updateStartButtonState() {
        startSortingBtn.disabled = characters.length < 2;
        // continueSortingBtn logic removed
    }

    // Helper: Next comparison (Infinite Loop Logic)
    function nextComparison() {
        if (!isSortingInProgress || comparisonPairs.length === 0) {
            // If not sorting or no pairs (e.g., after deleting all but one char mid-sort)
            if (isSortingInProgress && characters.length >=2 && comparisonPairs.length === 0) {
                 // Potentially regenerate pairs if all were completed and we want to continue "infinitely"
                for (let i = 0; i < characters.length; i++) {
                    for (let j = i + 1; j < characters.length; j++) {
                        // Avoid adding duplicates if some pairs were already done
                        if (!comparisonPairs.find(p => (p[0].id === characters[i].id && p[1].id === characters[j].id) || (p[0].id === characters[j].id && p[1].id === characters[i].id) )) {
                             comparisonPairs.push([characters[i], characters[j]]);
                        }
                    }
                }
                comparisonPairs.sort(() => Math.random() - 0.5);
                currentPairIndex = 0;
                totalComparisons = comparisonPairs.length;
                if (totalComparisons === 0) { // Still no pairs, means all possible pairs were done and not re-added
                    finishSorting();
                    return;
                }
            } else if (isSortingInProgress) {
                finishSorting(); // Or handle this state, e.g. not enough characters
                return;
            } else {
                return; // Not sorting, do nothing
            }
        }


        if (currentPairIndex >= totalComparisons) {
            // Reached end of current "round" of pairs
            comparisonPairs.sort(() => Math.random() - 0.5); // Reshuffle for a new round
            currentPairIndex = 0;
            // Optionally, notify user of new round, or just seamlessly continue
        }

        // Ensure currentPairIndex is valid after potential modifications
        if (currentPairIndex >= comparisonPairs.length && comparisonPairs.length > 0) {
            currentPairIndex = 0; // Reset if out of bounds after filtering/reshuffling
        }
        if (comparisonPairs.length === 0 && characters.length >=2) {
             // If all pairs were somehow exhausted and not regenerated, finish.
            finishSorting();
            return;
        }
         if (comparisonPairs.length === 0 && characters.length < 2) {
            // Not enough characters to sort, go back to add phase
            isSortingInProgress = false;
            comparePhase.classList.remove('active');
            addPhase.classList.add('active');
            alert(window.currentCharTranslations.alertNeedTwoCharacters);
            updateStartAndContinueButtonState();
            return;
        }


        // Progress display logic removed
        // currentComparisonSpan.textContent = currentPairIndex + 1; // Removed
        // totalComparisonsSpan.textContent = totalComparisons; // Removed


        const [charA, charB] = comparisonPairs[currentPairIndex];
        updateCharacterOption(option1, charA);
        updateCharacterOption(option2, charB);
        renderLiveRankingPreview(); // Update live ranking with each new pair
    }

    // Helper: Update comparison option
    function updateCharacterOption(optionElement, character) {
        const imageContainer = optionElement.querySelector('.image-container');
        const nameElement = optionElement.querySelector('.name');

        if (!character) { // Safety check if a character in a pair becomes undefined
            nameElement.textContent = "Error";
            imageContainer.innerHTML = `<div class="default-avatar"><i class="fas fa-exclamation-triangle"></i></div>`;
            return;
        }

        nameElement.textContent = character.name;

        if (character.avatar) {
            imageContainer.innerHTML = `<img src="${character.avatar}" alt="${character.name}" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\\'default-avatar\\'><i class=\\'fas fa-user\\'></i></div>'">`;
        } else {
            imageContainer.innerHTML = `
                <div class="default-avatar">
                    <i class="fas fa-user"></i>
                </div>
            `;
        }
    }

    // Helper: Handle comparison choice
    function handleComparisonChoice(winnerIndex) {
        if (currentPairIndex >= comparisonPairs.length) {
             console.error("Attempted to handle choice for an invalid pair index.");
             nextComparison(); // Try to recover
             return;
        }
        const [charA, charB] = comparisonPairs[currentPairIndex];

        // Ensure charA and charB are valid objects with elo
        if (!charA || charA.elo === undefined || !charB || charB.elo === undefined) {
            console.error("Invalid character data in comparison pair:", charA, charB);
            // Skip this pair and move to the next
            currentPairIndex++;
            nextComparison();
            return;
        }

        const eloA = charA.elo;
        const eloB = charB.elo;

        const expectedA = 1 / (1 + Math.pow(10, (eloB - eloA) / 400));
        const expectedB = 1 / (1 + Math.pow(10, (eloA - eloB) / 400));

        let scoreA, scoreB;
        if (winnerIndex === 0) { // charA wins
            scoreA = 1;
            scoreB = 0;
        } else { // charB wins
            scoreA = 0;
            scoreB = 1;
        }

        charA.elo = Math.round(eloA + K_FACTOR * (scoreA - expectedA));
        charB.elo = Math.round(eloB + K_FACTOR * (scoreB - expectedB));

        // Update characters array with new ELOs
        const charAIndexInFullList = characters.findIndex(c => c.id === charA.id);
        const charBIndexInFullList = characters.findIndex(c => c.id === charB.id);
        if(charAIndexInFullList !== -1) characters[charAIndexInFullList].elo = charA.elo;
        if(charBIndexInFullList !== -1) characters[charBIndexInFullList].elo = charB.elo;

        localStorage.setItem('characters', JSON.stringify(characters)); // Save all characters with updated ELOs

        currentPairIndex++;
        renderLiveRankingPreview(); // Update live ranking after ELO change
        nextComparison();
    }

    // Helper: Finish sorting
    function finishSorting() {
        isSortingInProgress = false;
        // Sort characters by ELO rating in descending order
        const finalRankedCharacters = [...characters].sort((a, b) => b.elo - a.elo);
        renderRankingList(finalRankedCharacters); // This is for the main result phase

        comparePhase.classList.remove('active');
        resultPhase.classList.add('active');
        // localStorage.removeItem(SAVED_PROGRESS_KEY); // Removed
        updateStartButtonState(); // Changed
    }

    // Helper: Render Live Ranking Preview
    function renderLiveRankingPreview() {
        if (!liveRankingList) return;
        liveRankingList.innerHTML = '';
        const rankedCharsPreview = [...characters].sort((a, b) => b.elo - a.elo);

        rankedCharsPreview.forEach((character, index) => {
            const item = document.createElement('div');
            item.className = 'ranking-item'; // Can reuse or adapt .ranking-item styles
            item.innerHTML = `
                <div class="rank">${index + 1}</div>
                <div class="character-avatar">
                    ${character.avatar ?
                    `<img src="${character.avatar}" alt="${character.name}" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\\'default-avatar\\'><i class=\\'fas fa-user\\'></i></div>'">` :
                    `<div class="default-avatar"><i class="fas fa-user"></i></div>`
                }
                </div>
                <div class="character-info">
                    <div class="name">${character.name} (Elo: ${character.elo})</div>
                </div>
            `;
            liveRankingList.appendChild(item);
        });
    }


    // Helper: Render final ranking list (for result phase)
    function renderRankingList(rankedChars) {
        rankingList.innerHTML = ''; // Clear previous results

        rankedChars.forEach((character, index) => {
            const rankClass = index === 0 ? 'rank-1' :
                index === 1 ? 'rank-2' :
                    index === 2 ? 'rank-3' : '';

            const item = document.createElement('div');
            item.className = 'ranking-item';
            item.innerHTML = `
                <div class="rank ${rankClass}">${index + 1}</div>
                <div class="character-avatar">
                    ${character.avatar ?
                    `<img src="${character.avatar}" alt="${character.name}" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\\'default-avatar\\'><i class=\\'fas fa-user\\'></i></div>'">` :
                    `<div class="default-avatar"><i class="fas fa-user"></i></div>`
                }
                </div>
                <div class="character-info">
                    <div class="name">${character.name} (Elo: ${character.elo})</div>
                </div>
            `;

            rankingList.appendChild(item);
        });

        // --- New AI Review Prompt Section ---
        const promptContainer = document.getElementById('prompt-output-container') || document.createElement('div');
        if (!document.getElementById('prompt-output-container')) {
            promptContainer.id = 'prompt-output-container';
            promptContainer.className = 'prompt-output-container'; // Add class for styling if needed
            // Try to insert it after rankingList or at a sensible place in resultPhase
            const resultControls = resultPhase.querySelector('.result-controls'); // Assuming .result-controls holds restart/back buttons
            if (resultControls) {
                resultPhase.insertBefore(promptContainer, resultControls);
            } else {
                resultPhase.appendChild(promptContainer);
            }
        }
        promptContainer.innerHTML = ''; // Clear previous content (e.g., old textarea and button)

        // Add title for the AI review section (if it's not already part of HTML structure)
        // Assuming the H3 with id 'prompt-title-text-char' is still in characters.html and updated by applyCharTranslations
        // If not, create it:
        // const reviewTitle = document.createElement('h3');
        // reviewTitle.id = 'prompt-title-text-char'; // Ensure this ID matches what applyCharTranslations expects
        // reviewTitle.textContent = window.currentCharTranslations.reviewSectionTitleChar;
        // promptContainer.appendChild(reviewTitle);


        const buttonsGroup = document.createElement('div');
        buttonsGroup.className = 'review-buttons-group'; // For styling

        const sharpReviewBtn = document.createElement('button');
        sharpReviewBtn.id = 'sharp-review-btn';
        sharpReviewBtn.className = 'btn btn-primary'; // Or your preferred class
        sharpReviewBtn.innerHTML = `<i class="fas fa-bolt"></i> <span>${window.currentCharTranslations.sharpReviewBtnTextChar}</span>`;

        const seriousReviewBtn = document.createElement('button');
        seriousReviewBtn.id = 'serious-review-btn';
        seriousReviewBtn.className = 'btn btn-secondary'; // Or your preferred class
        seriousReviewBtn.innerHTML = `<i class="fas fa-comment-dots"></i> <span>${window.currentCharTranslations.seriousReviewBtnTextChar}</span>`;

        const copyToAiSpan = document.createElement('span');
        copyToAiSpan.id = 'copy-to-ai-text-char';
        copyToAiSpan.className = 'copy-to-ai-text'; // For styling
        copyToAiSpan.textContent = ` ${window.currentCharTranslations.copyToAiTextChar}`; // Add leading space

        buttonsGroup.appendChild(sharpReviewBtn);
        buttonsGroup.appendChild(seriousReviewBtn);
        buttonsGroup.appendChild(copyToAiSpan);
        promptContainer.appendChild(buttonsGroup);

        const promptTextarea = document.createElement('textarea');
        promptTextarea.id = 'prompt-output-textarea-char'; // New ID for the textarea
        promptTextarea.readOnly = true;
        promptTextarea.onclick = function() { this.select(); };
        // Use window.currentLang here
        promptTextarea.placeholder = window.currentLang === 'zh' ? '点击上方按钮生成评价提示，内容将显示在此处。' : 'Click a button above to generate the review prompt, it will be displayed here.';
        promptContainer.appendChild(promptTextarea);


        const rankingText = rankedChars.map((character, index) => `${index + 1}. ${character.name} (Elo: ${character.elo})`).join('\n');

        function handleCopyPrompt(buttonElement, promptText, originalText, textareaElement) {
            textareaElement.value = promptText; // Display text in textarea
            navigator.clipboard.writeText(promptText).then(() => {
                const textSpan = buttonElement.querySelector('span');
                if (textSpan) textSpan.textContent = window.currentCharTranslations.copiedSuccessText.replace('!', '');
                else buttonElement.textContent = window.currentCharTranslations.copiedSuccessText; // Fallback

                const originalColor = buttonElement.style.color;
                const originalBorderColor = buttonElement.style.borderColor;
                buttonElement.style.color = '#4caf50';
                buttonElement.style.borderColor = '#4caf50';

                setTimeout(() => {
                    if (textSpan) textSpan.textContent = originalText;
                    else buttonElement.textContent = originalText; // Fallback
                    buttonElement.style.color = originalColor;
                    buttonElement.style.borderColor = originalBorderColor;
                }, 2000);
            }).catch(err => {
                console.error(window.currentCharTranslations.alertCopyFailed, err);
                alert(window.currentCharTranslations.alertCopyFailed);
            });
        }

        sharpReviewBtn.addEventListener('click', () => {
            const promptTemplate = window.currentCharTranslations.promptRequestReviewCharTemplate;
            const promptText = promptTemplate.replace('{ranking}', rankingText);
            const originalButtonText = window.currentCharTranslations.sharpReviewBtnTextChar;
            handleCopyPrompt(sharpReviewBtn, promptText, originalButtonText, promptTextarea);
        });

        seriousReviewBtn.addEventListener('click', () => {
            const promptTemplate = window.currentCharTranslations.promptRequestSeriousReviewCharTemplate;
            const promptText = promptTemplate.replace('{ranking}', rankingText);
            const originalButtonText = window.currentCharTranslations.seriousReviewBtnTextChar;
            handleCopyPrompt(seriousReviewBtn, promptText, originalButtonText, promptTextarea);
        });

        // Set initial content for textarea (e.g., the sharp review prompt)
        const initialPromptTemplate = window.currentCharTranslations.promptRequestReviewCharTemplate;
        promptTextarea.value = initialPromptTemplate.replace('{ranking}', rankingText);

    }

    // Save Progress Function
    function saveProgress() {
        if (!isSortingInProgress) return; // Only save if sorting is active

        const progressData = {
            characters: characters, // Full character list with current ELOs
            comparisonPairs: comparisonPairs,
            currentPairIndex: currentPairIndex,
            totalComparisons: totalComparisons // Current round's total
        };
        localStorage.setItem(SAVED_PROGRESS_KEY, JSON.stringify(progressData));
        alert(window.currentCharTranslations.alertProgressSaved);
        updateStartButtonState();
    }

    // Load Progress Function - REMOVED
    // saveProgress Function - REMOVED
});
