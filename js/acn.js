// Internationalization Script for acn.html
const i18nData = {
    'en': {
        pageTitle: "ACN Sorting System",
        headerTitle: "Anime/Novel/Comic Sorting System",
        headerSubtitle: "Add your favorite ACN works and rank them through pairwise comparisons",
        tutorialTitleText: "Instructions",
        tutorialLi1Text: "Add Works: Enter the work's name, and upload a cover or use an external image link.",
        tutorialLi2Text: "Cover Optional: A default icon will be used if no cover is added.",
        tutorialLi3Text: "Local Storage: All data is saved in your browser and won't be lost on refresh.",
        tutorialLi4Text: "Sorting Phase: The system will show two works; choose the one you prefer.",
        tutorialLi6Text: "Elo Rating System: This system calculates the relative preference levels for items (characters, games, ACN works) by comparing them in pairs. Each item has an Elo score that updates after each comparison.",
        tutorialLi7Text: "Powered by DeepSeek R1 & Gemini 2.5 pro",
        labelItemName: "Work Name *",
        inputItemNamePlaceholder: "Enter Anime, Novel, or Comic name",
        labelUploadCover: "Upload Cover",
        uploadAreaSpan: "Click to upload image or drag and drop file here",
        labelUrlCover: "Or use Image URL",
        inputAvatarUrlPlaceholder: "Enter cover image URL",
        previewLoadingText: " Image loading...",
        previewErrorText: "Image failed to load, please check URL",
        addItemBtnText: "Add Work",
        startSortingBtnText: "Start Sorting",
        resetAllBtnText: "Clear All Works",
        resetEloBtnTextAcn: "Reset Elo Scores", // Added
        backToHomeLink: "Back to Home",
        importJsonBtnTextAcn: "Import ACN List",
        exportJsonBtnTextAcn: "Export ACN List",
        comparePhaseTitle: "Which work do you prefer?",
        comparePhaseSubtitle: "Click to select your preferred work",
        // compareInfoPrefix: "Current progress: ", // Removed
        // compareInfoSuffix: " comparisons", // Removed
        // progressBarTextPrefix: "Comparison progress: ", // Removed
        resultPhaseTitle: "Work Sorting Results",
        resultPhaseSubtitle: "Based on your selections, here is the work preference ranking",
        reviewSectionTitleAcn: "AI Review Prompts", // Changed from promptTitleText
        sharpReviewBtnTextAcn: "Sharp Review",
        seriousReviewBtnTextAcn: "Serious Review",
        copyToAiTextAcn: "(Copy and send to AI)",
        copyBtnText: " Copy", // Kept for new buttons
        restartBtnText: "Continue sorting",
        backToAddBtnText: "Back to Modify",
        alertEnterWorkName: "Please enter the work name",
        alertNeedTwoWorks: "You need to add at least two works to sort",
        confirmResetAll: "Are you sure you want to delete all works? This action cannot be undone.",
        confirmResetEloAcn: "Are you sure you want to reset all Elo scores for ACN items? This will reset them to the default value.", // Added
        alertEloResetAcn: "ACN item Elo scores have been reset.", // Added
        alertImportError: "Error importing JSON. Please check the file format.",
        alertNoFileSelected: "No file selected.",
        alertCopyFailed: "Copy failed, your browser may not support this feature.",
        copiedSuccessText: "Copied!",
        emptyListPlaceholder: "No works added yet",
        promptRequestReviewTemplate: "You are now a tsundere girl who is proficient in the acg field. I have ranked my favorite anime, comics, and novels. Please review them:\n{ranking}",
        promptRequestSeriousReviewAcnTemplate: "You are now an ACG enthusiast. I have ranked my favorite ACN works. Please provide a detailed review:\n{ranking}",
        // continueSortingBtnTextAcn: "Continue Last Sort", // Removed
        stopSortingBtnTextAcn: "Stop Sorting & View Results",
        // saveProgressBtnTextAcn: "Save Progress", // Removed
        liveRankingTitleAcn: "Live Ranking"
        // alertProgressSaved: "Progress saved successfully!", // Removed
        // alertProgressLoaded: "Progress loaded successfully!", // Removed
        // alertNoSavedProgress: "No saved progress found.", // Removed
        // confirmOverwriteProgress: "Starting a new sort will overwrite any saved progress. Continue?" // Removed
    },
    'zh': {
        pageTitle: "ACN排序系统",
        headerTitle: "动画小说漫画排序系统",
        headerSubtitle: "添加你喜爱的ACN作品，通过两两比较得出最终排名",
        tutorialTitleText: "使用说明",
        tutorialLi1Text: "添加作品：输入作品名称，并上传封面或使用外链图片",
        tutorialLi2Text: "封面可选：不添加封面将使用默认图标",
        tutorialLi3Text: "本地存储：所有数据保存在浏览器中，刷新页面不会丢失",
        tutorialLi4Text: "排序阶段：系统会展示两个作品，选择你更喜欢的作品",
        tutorialLi6Text: "Elo等级分系统：本系统通过两两对比来计算项目（角色、游戏、ACN作品）的相对喜好程度。每个项目都有一个 Elo 分数，该分数在每次比较后更新。",
        tutorialLi7Text: "Powered by DeepSeek R1 & Gemini 2.5 pro",
        labelItemName: "作品名称 *",
        inputItemNamePlaceholder: "输入动画、小说或漫画名称",
        labelUploadCover: "上传封面",
        uploadAreaSpan: "点击上传图片或拖放文件到此处",
        labelUrlCover: "或使用图片链接",
        inputAvatarUrlPlaceholder: "输入封面图片URL",
        previewLoadingText: " 图片加载中...",
        previewErrorText: "图片加载失败，请检查URL",
        addItemBtnText: "添加作品",
        startSortingBtnText: "开始排序",
        resetAllBtnText: "清空所有作品",
        resetEloBtnTextAcn: "重置Elo分数", // Added
        backToHomeLink: "返回首页",
        importJsonBtnTextAcn: "导入作品列表",
        exportJsonBtnTextAcn: "导出作品列表",
        comparePhaseTitle: "你更喜欢哪个作品？",
        comparePhaseSubtitle: "点击选择你更喜欢的作品",
        // compareInfoPrefix: "当前进度: ", // Removed
        // compareInfoSuffix: " 次比较", // Removed
        // progressBarTextPrefix: "比较进度: ", // Removed
        resultPhaseTitle: "作品排序结果",
        resultPhaseSubtitle: "根据你的选择，以下是作品喜爱度排名",
        reviewSectionTitleAcn: "AI 评价提示", // Changed from promptTitleText
        sharpReviewBtnTextAcn: "请求锐评",
        seriousReviewBtnTextAcn: "正经评论",
        copyToAiTextAcn: "（复制并发送给 AI）",
        copyBtnText: " 复制", // Kept for new buttons
        restartBtnText: "继续排序",
        backToAddBtnText: "返回修改",
        alertEnterWorkName: "请输入作品名称",
        alertNeedTwoWorks: "至少需要添加两个作品才能排序",
        confirmResetAll: "确定要删除所有作品吗？此操作不可撤销。",
        confirmResetEloAcn: "确定要重置所有ACN作品的Elo分数吗？这将把它们恢复到默认值。", // Added
        alertEloResetAcn: "ACN作品Elo分数已重置。", // Added
        alertImportError: "导入JSON失败，请检查文件格式。",
        alertNoFileSelected: "未选择文件。",
        alertCopyFailed: "复制失败，您的浏览器可能不支持此功能。",
        copiedSuccessText: "已复制!",
        emptyListPlaceholder: "还没有添加任何作品",
        promptRequestReviewTemplate: "你现在是一个精通acg领域的雌小鬼。我给自己喜欢的动画、漫画、小说进行了一个排行，你来进行评价：\n{ranking}",
        promptRequestSeriousReviewAcnTemplate: "你现在是一个精通acg领域的爱好者。我给自己喜欢的ACN作品进行了一个排行，你来进行详细评价：\n{ranking}",
        // continueSortingBtnTextAcn: "继续上次排序", // Removed
        stopSortingBtnTextAcn: "停止排序并查看结果",
        // saveProgressBtnTextAcn: "保存进度", // Removed
        liveRankingTitleAcn: "实时排名"
        // alertProgressSaved: "进度已保存！", // Removed
        // alertProgressLoaded: "已加载保存的进度！", // Removed
        // alertNoSavedProgress: "未找到已保存的进度。", // Removed
        // confirmOverwriteProgress: "开始新的排序将覆盖任何已保存的进度。是否继续？" // Removed
    }
};

function applyTranslations() {
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.startsWith('zh') ? 'zh' : 'en';
    const texts = i18nData[lang];

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = texts.pageTitle;

    const elementsToTranslate = {
        'header-title': texts.headerTitle,
        'header-subtitle': texts.headerSubtitle,
        'tutorial-title-text': texts.tutorialTitleText,
        'tutorial-li-1-text': texts.tutorialLi1Text,
        'tutorial-li-2-text': texts.tutorialLi2Text,
        'tutorial-li-3-text': texts.tutorialLi3Text,
        'tutorial-li-4-text': texts.tutorialLi4Text,
        'tutorial-li-6-text': texts.tutorialLi6Text,
        'tutorial-li-7-text': texts.tutorialLi7Text,
        'label-item-name': texts.labelItemName,
        'label-upload-cover': texts.labelUploadCover,
        'upload-area-span': texts.uploadAreaSpan,
        'label-url-cover': texts.labelUrlCover,
        'preview-loading-text': texts.previewLoadingText,
        'preview-error-text': texts.previewErrorText,
        'add-item-btn-text': texts.addItemBtnText,
        'start-sorting-btn-text': texts.startSortingBtnText,
        'reset-all-btn-text': texts.resetAllBtnText,
        'reset-elo-btn-text-acn': texts.resetEloBtnTextAcn, // Added
        'back-to-home-link': texts.backToHomeLink,
        'import-json-btn-text-acn': texts.importJsonBtnTextAcn,
        'export-json-btn-text-acn': texts.exportJsonBtnTextAcn,
        'compare-phase-title': texts.comparePhaseTitle,
        'compare-phase-subtitle': texts.comparePhaseSubtitle,
        // 'compare-info-prefix': texts.compareInfoPrefix, // Removed
        // 'compare-info-suffix': texts.compareInfoSuffix, // Removed
        // 'progress-bar-text-prefix': texts.progressBarTextPrefix, // Removed
        'result-phase-title': texts.resultPhaseTitle,
        'result-phase-subtitle': texts.resultPhaseSubtitle,
        'prompt-title-text': texts.reviewSectionTitleAcn, // Updated key
        // 'copy-btn-text': texts.copyBtnText, // Will be part of dynamic buttons
        'restart-btn-text': texts.restartBtnText,
        'back-to-add-btn-text': texts.backToAddBtnText,
        // 'continue-sorting-btn-text-acn': texts.continueSortingBtnTextAcn, // Removed
        'stop-sorting-btn-text-acn': texts.stopSortingBtnTextAcn,
        // 'save-progress-btn-text-acn': texts.saveProgressBtnTextAcn, // Removed
        'live-ranking-title-acn': texts.liveRankingTitleAcn
    };

    for (const id in elementsToTranslate) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = elementsToTranslate[id];
        }
    }

    const itemNameInput = document.getElementById('character-name');
    if (itemNameInput) itemNameInput.placeholder = texts.inputItemNamePlaceholder;
    const avatarUrlInput = document.getElementById('avatar-url');
    if (avatarUrlInput) avatarUrlInput.placeholder = texts.inputAvatarUrlPlaceholder;

    window.currentTranslations = texts;
    window.currentLang = lang; // Store current language globally
}

document.addEventListener('DOMContentLoaded', applyTranslations);

document.addEventListener('DOMContentLoaded', function () {
    let items = JSON.parse(localStorage.getItem('acn_items')) || [];
    items.forEach(item => {
        if (item.elo === undefined) {
            item.elo = 1200;
        }
    });
    let comparisonPairs = [];
    let currentPairIndex = 0;
    let totalComparisons = 0;
    const K_FACTOR = 32;
    let debounceTimer;
    let isSortingInProgress = false;
    // const SAVED_PROGRESS_KEY_ACN = 'acnSortProgress'; // Removed

    const resizerCanvas = document.getElementById('image-resizer-canvas');
    const addPhase = document.getElementById('add-phase');
    const comparePhase = document.getElementById('compare-phase');
    const resultPhase = document.getElementById('result-phase');
    const itemsList = document.getElementById('characters-list');
    const itemNameInput = document.getElementById('character-name');
    const avatarInput = document.getElementById('avatar-input');
    const avatarUrlInput = document.getElementById('avatar-url');
    const avatarPreview = document.getElementById('avatar-preview');
    const avatarUploadArea = document.getElementById('avatar-upload-area');
    const cancelUploadBtn = document.getElementById('cancel-upload');
    const addItemBtn = document.getElementById('add-character-btn');
    const startSortingBtn = document.getElementById('start-sorting-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resetEloBtnAcn = document.getElementById('reset-elo-btn'); // Added
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
    const importJsonInputAcn = document.getElementById('import-json-input-acn'); // Assuming this ID exists or was intended
    const importJsonBtnAcn = document.getElementById('import-json-btn-acn'); // Assuming this ID exists or was intended
    const exportJsonBtnAcn = document.getElementById('export-json-btn-acn'); // Assuming this ID exists or was intended
    // const continueSortingBtnAcn = document.getElementById('continue-sorting-btn-acn'); // Removed
    const stopSortingBtnAcn = document.getElementById('stop-sorting-btn-acn'); // Assuming this ID exists or was intended
    // const saveProgressBtnAcn = document.getElementById('save-progress-btn-acn'); // Removed
    const liveRankingListAcn = document.getElementById('live-ranking-list-acn'); // Assuming this ID exists or was intended

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

    function initAcnPage() {
        renderItemsList();
        updateStartButtonStateAcn(); // Changed
        if (!window.currentTranslations) {
            applyTranslations();
        }
    }
    initAcnPage();

    if (importJsonBtnAcn) { // Check if element exists
        importJsonBtnAcn.addEventListener('click', () => {
            if (importJsonInputAcn) importJsonInputAcn.click();
        });
    }

    if (importJsonInputAcn) { // Check if element exists
        importJsonInputAcn.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (!file) {
                alert(window.currentTranslations.alertNoFileSelected);
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedData = JSON.parse(e.target.result);
                    if (Array.isArray(importedData)) {
                        items = [];
                        importedData.forEach(item => {
                            if (item && typeof item.name === 'string' && (typeof item.avatar === 'string' || typeof item.url === 'string')) {
                                items.push({
                                    id: Date.now() + Math.random(),
                                    name: item.name,
                                    avatar: item.avatar || item.url || '',
                                    elo: item.elo !== undefined ? parseInt(item.elo, 10) : 1200
                                });
                            }
                        });
                        localStorage.setItem('acn_items', JSON.stringify(items));
                        // localStorage.removeItem(SAVED_PROGRESS_KEY_ACN); // Removed
                        renderItemsList();
                        updateStartButtonStateAcn();
                    } else {
                        alert(window.currentTranslations.alertImportError);
                    }
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    alert(window.currentTranslations.alertImportError);
                }
                importJsonInputAcn.value = '';
            };
            reader.readAsText(file);
        });
    }


    if (exportJsonBtnAcn) { // Check if element exists
        exportJsonBtnAcn.addEventListener('click', () => {
            const dataToExport = items.map(item => ({ name: item.name, avatar: item.avatar, elo: item.elo })); // Added elo
            const jsonString = JSON.stringify(dataToExport, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'acn_items_export.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }


    avatarUploadArea.addEventListener('click', () => avatarInput.click());

    avatarUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        avatarUploadArea.style.borderColor = '#9b59b6';
        avatarUploadArea.style.background = 'rgba(155, 89, 182, 0.1)';
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
            resizeImage(file, function (resizedDataUrl) {
                avatarPreview.src = resizedDataUrl;
                avatarPreview.style.display = 'block';
                avatarUploadArea.querySelector('i').style.display = 'none';
                avatarUploadArea.querySelector('span').style.display = 'none';
                cancelUploadBtn.style.display = 'block';
                hideUrlPreview();
            });
        }
    });

    cancelUploadBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        avatarPreview.src = '';
        avatarPreview.style.display = 'none';
        avatarInput.value = '';
        avatarUploadArea.querySelector('i').style.display = 'block';
        avatarUploadArea.querySelector('span').style.display = 'block';
        cancelUploadBtn.style.display = 'none';
    });

    avatarUrlInput.addEventListener('input', function () {
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
            tempImage.onload = function () {
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
            tempImage.onerror = function () {
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

    addItemBtn.addEventListener('click', function () {
        const name = itemNameInput.value.trim();
        if (!name) {
            alert(window.currentTranslations.alertEnterWorkName);
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
        items.push({ id: Date.now(), name: name, avatar: avatar, elo: 1200 });
        localStorage.setItem('acn_items', JSON.stringify(items));
        itemNameInput.value = '';
        avatarPreview.style.display = 'none';
        avatarPreview.src = '';
        avatarUrlInput.value = '';
        avatarUploadArea.querySelector('i').style.display = 'block';
        avatarUploadArea.querySelector('span').style.display = 'block';
        cancelUploadBtn.style.display = 'none';
        hideUrlPreview();
        renderItemsList();
        updateStartButtonStateAcn();
    });

    startSortingBtn.addEventListener('click', function () {
        if (items.length < 2) {
            alert(window.currentTranslations.alertNeedTwoWorks);
            return;
        }
        // localStorage.removeItem(SAVED_PROGRESS_KEY_ACN); // Removed

        comparisonPairs = [];
        for (let i = 0; i < items.length; i++) {
            for (let j = i + 1; j < items.length; j++) {
                comparisonPairs.push([items[i], items[j]]);
            }
        }
        if (comparisonPairs.length === 0) {
            alert("Error: No comparison pairs generated for ACN items.");
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
        renderLiveRankingPreviewAcn();
        nextComparisonAcn();
    });

    // continueSortingBtnAcn - REMOVED
    // saveProgressBtnAcn - REMOVED

    if (stopSortingBtnAcn) { // Check if element exists
        stopSortingBtnAcn.addEventListener('click', function () {
            isSortingInProgress = false;
            finishSortingAcn();
        });
    }


    resetBtn.addEventListener('click', function () {
        if (confirm(window.currentTranslations.confirmResetAll)) {
            items = [];
            localStorage.removeItem('acn_items');
            // localStorage.removeItem(SAVED_PROGRESS_KEY_ACN); // Removed
            renderItemsList();
            updateStartButtonStateAcn();
        }
    });

    if (resetEloBtnAcn) { // Check if element exists
        resetEloBtnAcn.addEventListener('click', function () {
            if (confirm(window.currentTranslations.confirmResetEloAcn)) {
                items.forEach(item => item.elo = 1200);
                localStorage.setItem('acn_items', JSON.stringify(items));
                renderItemsList();
                if (comparePhase.classList.contains('active') || resultPhase.classList.contains('active')) {
                    renderLiveRankingPreviewAcn();
                }
                // alert(window.currentTranslations.alertEloResetAcn);
            }
        });
    }


    option1.addEventListener('click', () => { if (isSortingInProgress) handleComparisonChoiceAcn(0); });
    option2.addEventListener('click', () => { if (isSortingInProgress) handleComparisonChoiceAcn(1); });

    restartBtn.addEventListener('click', function () {
        if (items.length < 2) {
            resultPhase.classList.remove('active');
            addPhase.classList.add('active'); // 如果少于两个项目，回到添加界面
            alert(window.currentTranslations.alertNeedTwoWorks);
            updateStartButtonStateAcn();
            return;
        }

        // 与 startSortingBtn 类似的核心逻辑
        comparisonPairs = [];
        for (let i = 0; i < items.length; i++) {
            for (let j = i + 1; j < items.length; j++) {
                comparisonPairs.push([items[i], items[j]]);
            }
        }

        if (comparisonPairs.length === 0) { // Should not happen if items.length >= 2
            resultPhase.classList.remove('active');
            addPhase.classList.add('active');
            alert(window.currentTranslations.alertNeedTwoWorks); // Or a more specific error
            updateStartButtonStateAcn();
            return;
        }

        comparisonPairs.sort(() => Math.random() - 0.5);
        currentPairIndex = 0;
        totalComparisons = comparisonPairs.length;
        isSortingInProgress = true;

        resultPhase.classList.remove('active');
        addPhase.classList.remove('active');
        comparePhase.classList.add('active');

        renderLiveRankingPreviewAcn();
        nextComparisonAcn();
    });

    backToAddBtn.addEventListener('click', () => {
        resultPhase.classList.remove('active');
        addPhase.classList.add('active');
        updateStartButtonStateAcn();
    });

    function renderItemsList() {
        itemsList.innerHTML = '';
        if (items.length === 0) {
            itemsList.innerHTML = `<p style="text-align:center; opacity:0.7; padding:30px;">${window.currentTranslations.emptyListPlaceholder}</p>`;
            return;
        }
        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'character-card'; // HTML uses character-card, keep for now
            card.innerHTML = `
                ${item.avatar ?
                    `<img src="${item.avatar}" alt="${item.name}" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\\'default-avatar\\'><i class=\\'fas fa-book-open\\'></i></div>'">` :
                    `<div class="default-avatar"><i class="fas fa-book-open"></i></div>`
                }
                <div class="name">${item.name}</div>
                <div class="delete-btn" data-index="${index}">
                    <i class="fas fa-times"></i>
                </div>
            `;
            itemsList.appendChild(card);
            card.querySelector('.delete-btn').addEventListener('click', function (e) {
                e.stopPropagation();
                const indexToDelete = parseInt(this.getAttribute('data-index'));
                const deletedItemId = items[indexToDelete].id;
                items.splice(indexToDelete, 1);

                if (isSortingInProgress) { // Removed localStorage check
                    comparisonPairs = comparisonPairs.filter(pair => pair[0].id !== deletedItemId && pair[1].id !== deletedItemId);
                    totalComparisons = comparisonPairs.length;
                    if (currentPairIndex >= totalComparisons && totalComparisons > 0) {
                        currentPairIndex = totalComparisons - 1;
                    } else if (totalComparisons === 0) {
                        currentPairIndex = 0;
                    }
                }
                localStorage.setItem('acn_items', JSON.stringify(items));
                // if (isSortingInProgress) saveProgressAcn(); // Removed
                renderItemsList();
                updateStartButtonStateAcn();
            });
        });
    }

    function updateStartButtonStateAcn() { // Renamed
        startSortingBtn.disabled = items.length < 2;
        // continueSortingBtnAcn logic removed
    }

    function nextComparisonAcn() {
        if (!isSortingInProgress || comparisonPairs.length === 0) {
            if (isSortingInProgress && items.length >= 2 && comparisonPairs.length === 0) {
                for (let i = 0; i < items.length; i++) {
                    for (let j = i + 1; j < items.length; j++) {
                        if (!comparisonPairs.find(p => (p[0].id === items[i].id && p[1].id === items[j].id) || (p[0].id === items[j].id && p[1].id === items[i].id))) {
                            comparisonPairs.push([items[i], items[j]]);
                        }
                    }
                }
                comparisonPairs.sort(() => Math.random() - 0.5);
                currentPairIndex = 0;
                totalComparisons = comparisonPairs.length;
                if (totalComparisons === 0) {
                    finishSortingAcn(); return;
                }
            } else if (isSortingInProgress) {
                finishSortingAcn(); return;
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
        if (comparisonPairs.length === 0 && items.length >= 2) {
            finishSortingAcn(); return;
        }
        if (comparisonPairs.length === 0 && items.length < 2) {
            isSortingInProgress = false;
            comparePhase.classList.remove('active');
            addPhase.classList.add('active');
            alert(window.currentTranslations.alertNeedTwoWorks);
            updateStartButtonStateAcn();
            return;
        }

        // Progress display logic removed
        // if(progressTextElem) progressTextElem.textContent = progress; // Removed
        // currentComparisonSpan.textContent = currentPairIndex + 1; // Removed
        // totalComparisonsSpan.textContent = totalComparisons; // Removed
        const [itemA, itemB] = comparisonPairs[currentPairIndex];
        updateItemOption(option1, itemA);
        updateItemOption(option2, itemB);
        renderLiveRankingPreviewAcn();
    }

    function updateItemOption(optionElement, item) {
        const imageContainer = optionElement.querySelector('.image-container');
        const nameElement = optionElement.querySelector('.name');
        if (!item) {
            nameElement.textContent = "Error";
            imageContainer.innerHTML = `<div class="default-avatar"><i class="fas fa-exclamation-triangle"></i></div>`;
            return;
        }
        nameElement.textContent = item.name;
        if (item.avatar) {
            imageContainer.innerHTML = `<img src="${item.avatar}" alt="${item.name}" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\\'default-avatar\\'><i class=\\'fas fa-book-open\\'></i></div>'">`;
        } else {
            imageContainer.innerHTML = `<div class="default-avatar"><i class="fas fa-book-open"></i></div>`;
        }
    }

    function handleComparisonChoiceAcn(winnerIndex) {
        if (currentPairIndex >= comparisonPairs.length) {
            console.error("Attempted to handle choice for an invalid pair index in ACN.");
            nextComparisonAcn(); return;
        }
        const [itemA, itemB] = comparisonPairs[currentPairIndex];
        if (!itemA || itemA.elo === undefined || !itemB || itemB.elo === undefined) {
            console.error("Invalid ACN item data in comparison pair:", itemA, itemB);
            currentPairIndex++;
            nextComparisonAcn();
            return;
        }
        const eloA = itemA.elo;
        const eloB = itemB.elo;
        const expectedA = 1 / (1 + Math.pow(10, (eloB - eloA) / 400));
        const expectedB = 1 / (1 + Math.pow(10, (eloA - eloB) / 400));
        let scoreA, scoreB;
        if (winnerIndex === 0) { scoreA = 1; scoreB = 0; } else { scoreA = 0; scoreB = 1; }
        itemA.elo = Math.round(eloA + K_FACTOR * (scoreA - expectedA));
        itemB.elo = Math.round(eloB + K_FACTOR * (scoreB - expectedB));
        const itemAIndex = items.findIndex(i => i.id === itemA.id);
        const itemBIndex = items.findIndex(i => i.id === itemB.id);
        if (itemAIndex !== -1) items[itemAIndex].elo = itemA.elo;
        if (itemBIndex !== -1) items[itemBIndex].elo = itemB.elo;
        localStorage.setItem('acn_items', JSON.stringify(items));
        currentPairIndex++;
        renderLiveRankingPreviewAcn();
        nextComparisonAcn();
    }

    function finishSortingAcn() {
        isSortingInProgress = false;
        const finalRankedItems = [...items].sort((a, b) => b.elo - a.elo);
        renderRankingListAcn(finalRankedItems);
        comparePhase.classList.remove('active');
        resultPhase.classList.add('active');
        // localStorage.removeItem(SAVED_PROGRESS_KEY_ACN); // Removed
        updateStartButtonStateAcn();
    }

    function renderLiveRankingPreviewAcn() {
        if (!liveRankingListAcn) return;
        liveRankingListAcn.innerHTML = '';
        const rankedItemsPreview = [...items].sort((a, b) => b.elo - a.elo);
        rankedItemsPreview.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'ranking-item';
            div.innerHTML = `
                <div class="rank">${index + 1}</div>
                <div class="character-avatar">
                     ${item.avatar ?
                    `<img src="${item.avatar}" alt="${item.name}" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\\'default-avatar\\'><i class=\\'fas fa-book-open\\'></i></div>'">` :
                    `<div class="default-avatar"><i class="fas fa-book-open"></i></div>`
                }
                </div>
                <div class="character-info">
                    <div class="name">${item.name} (Elo: ${item.elo})</div>
                </div>
            `;
            liveRankingListAcn.appendChild(div);
        });
    }

    function renderRankingListAcn(rankedItems) {
        rankingList.innerHTML = '';
        rankedItems.forEach((item, index) => {
            const rankClass = index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : '';
            const rankingItemDiv = document.createElement('div');
            rankingItemDiv.className = 'ranking-item';
            rankingItemDiv.innerHTML = `
                <div class="rank ${rankClass}">${index + 1}</div>
                <div class="character-avatar">
                    ${item.avatar ?
                    `<img src="${item.avatar}" alt="${item.name}" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\\'default-avatar\\'><i class=\\'fas fa-book-open\\'></i></div>'">` :
                    `<div class="default-avatar"><i class="fas fa-book-open"></i></div>`
                }
                </div>
                <div class="character-info">
                    <div class="name">${item.name} (Elo: ${item.elo})</div>
                </div>
            `;
            rankingList.appendChild(rankingItemDiv);
        });

        const lang = (navigator.language || navigator.userLanguage).startsWith('zh') ? 'zh' : 'en';

        // --- New AI Review Prompt Section for ACN ---
        const promptContainer = document.getElementById('prompt-output-container-acn') || document.createElement('div'); // Use specific ID
        if (!document.getElementById('prompt-output-container-acn')) {
            promptContainer.id = 'prompt-output-container-acn';
            promptContainer.className = 'prompt-output-container';
            const resultControls = resultPhase.querySelector('.result-controls');
            if (resultControls) {
                resultPhase.insertBefore(promptContainer, resultControls);
            } else {
                resultPhase.appendChild(promptContainer);
            }
        }
        promptContainer.innerHTML = '';

        const buttonsGroup = document.createElement('div');
        buttonsGroup.className = 'review-buttons-group';

        const sharpReviewBtn = document.createElement('button');
        sharpReviewBtn.id = 'sharp-review-btn-acn';
        sharpReviewBtn.className = 'btn btn-primary'; // Ensure .btn-primary is styled in acn.css
        sharpReviewBtn.innerHTML = `<i class="fas fa-bolt"></i> <span>${window.currentTranslations.sharpReviewBtnTextAcn}</span>`;

        const seriousReviewBtn = document.createElement('button');
        seriousReviewBtn.id = 'serious-review-btn-acn';
        seriousReviewBtn.className = 'btn btn-secondary'; // Ensure .btn-secondary is styled in acn.css
        seriousReviewBtn.innerHTML = `<i class="fas fa-comment-dots"></i> <span>${window.currentTranslations.seriousReviewBtnTextAcn}</span>`;

        const copyToAiSpan = document.createElement('span');
        copyToAiSpan.className = 'copy-to-ai-text';
        copyToAiSpan.textContent = ` ${window.currentTranslations.copyToAiTextAcn}`;

        buttonsGroup.appendChild(sharpReviewBtn);
        buttonsGroup.appendChild(seriousReviewBtn);
        buttonsGroup.appendChild(copyToAiSpan);
        promptContainer.appendChild(buttonsGroup);

        const promptTextarea = document.createElement('textarea');
        promptTextarea.id = 'prompt-output-textarea-acn'; // Specific ID
        promptTextarea.readOnly = true;
        promptTextarea.onclick = function() { this.select(); };
        // Use window.currentLang here
        promptTextarea.placeholder = window.currentLang === 'zh' ? '点击上方按钮生成评价提示，内容将显示在此处。' : 'Click a button above to generate the review prompt, it will be displayed here.';
        promptContainer.appendChild(promptTextarea);

        const rankingText = rankedItems.map((item, index) => `${index + 1}. ${item.name} (Elo: ${item.elo})`).join('\n');

        function handleCopyPromptAcn(buttonElement, promptText, originalText, textareaElement) {
            textareaElement.value = promptText;
            navigator.clipboard.writeText(promptText).then(() => {
                const textSpan = buttonElement.querySelector('span');
                if (textSpan) textSpan.textContent = window.currentTranslations.copiedSuccessText.replace('!', '');
                else buttonElement.textContent = window.currentTranslations.copiedSuccessText;

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
                console.error(window.currentTranslations.alertCopyFailed, err);
                alert(window.currentTranslations.alertCopyFailed);
            });
        }

        sharpReviewBtn.addEventListener('click', () => {
            const promptTemplate = window.currentTranslations.promptRequestReviewTemplate;
            const promptText = promptTemplate.replace('{ranking}', rankingText);
            const originalButtonText = window.currentTranslations.sharpReviewBtnTextAcn;
            handleCopyPromptAcn(sharpReviewBtn, promptText, originalButtonText, promptTextarea);
        });

        seriousReviewBtn.addEventListener('click', () => {
            const promptTemplate = window.currentTranslations.promptRequestSeriousReviewAcnTemplate;
            const promptText = promptTemplate.replace('{ranking}', rankingText);
            const originalButtonText = window.currentTranslations.seriousReviewBtnTextAcn;
            handleCopyPromptAcn(seriousReviewBtn, promptText, originalButtonText, promptTextarea);
        });

        // Set initial content for textarea
        const initialPromptTemplate = window.currentTranslations.promptRequestReviewTemplate;
        promptTextarea.value = initialPromptTemplate.replace('{ranking}', rankingText);
    }

    // saveProgressAcn - REMOVED
    // loadProgressAcn - REMOVED
});
