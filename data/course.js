// 课程数据：本地网课工具（少儿 Python 启蒙到进阶，共 15 章 43 节）
// 结构：window.COURSE_DATA = { title, chapters:[{title, lessons:[...]}] }
window.COURSE_DATA = {
  title: '和小光一起学 Python',
  chapters: [
    {
      title: '学前小课：Python 是什么',
      lessons: [
        {
          id: 'py1',
          title: 'Python 的起源与未来',
          icon: '🐍',
          forParent: true,
          markdown: '## Python 是什么\n\n**Python** 是世界上最受欢迎的程序设计语言之一。它的名字不是来自蛇哦——而是创始人 Guido van Rossum 在 1989 年写它时正在看一个叫 *Monty Python* 的搞笑节目！\n\n### 从哪里来\n- 1989 年：荷兰程序员 Guido 在圣诞假期开始写 Python\n- 1991 年：第一个版本发布\n- 现在：全球几千万人在用 Python\n\n### 用来做什么\nPython 能做的事情可太多了：\n- 🌐 **建网站**——Instagram、Pinterest 都用 Python\n- 📊 **分析数据**——科学家用它处理数据、画图表\n- 🤖 **人工智能**——最火的 AI 工具背后都是 Python\n- 🎮 **写游戏**——可以用 Python 做小游戏\n- 📚 **学编程第一阶段**——语法像英语一样简单，最适合初学者\n\n### 为什么适合你\n你已经学会了用循环、条件、变量写小程序。Python 就是帮你把这些想法变成现实的**魔法工具**。学会它，你可以写自己的小游戏、做自动算题、甚至控制机器人！',
          figures: [{ key: 'python_origin', caption: '🐍 Python 的创始人 Guido van Rossum，名字来自 Monty Python 喜剧团' }],
          takeaway: '今天咱们认识了一个超厉害的小伙伴叫 Python！它 1991 年出生，能帮你搭网站、玩人工智能、算数据，最棒的是它说话的方式特别简单，小朋友也能学会。',
          video: 'video/py1.mp4',
          videoCaption: 'Python 是世界上用得最多的编程语言之一，Guido van Rossum 1991 年发布第一版，现在 AI 时代更热门！',
          words: [
            { en: 'Python', zh: '一种编程语言，名字来自喜剧 Monty Python，不是🐍的意思' },
            { en: 'program', zh: '程序：让电脑执行的一系列指令' },
            { en: 'code', zh: '代码：用编程语言写的程序文字' }
          ],
          exercises: [
            { type: 'choice', question: 'Python 是哪个国家的人发明的？', options: ['美国', '荷兰', '中国', '日本'], answer: 1, explain: '荷兰人 Guido van Rossum 在 1989 年圣诞假期开始写 Python。' },
            { type: 'choice', question: 'Python 可以用来做什么？', options: ['只能玩游戏', '建网站、做AI、分析数据', '只能打字'], answer: 1, explain: 'Python 用途非常广：网站（Instagram）、AI、数据分析都用它。' },
            { type: 'typing', question: '敲一敲今天的新单词（Python、program）：', words: ['PYTHON', 'PROGRAM', 'CODE'] }
          ]
        },
        {
          id: 'py2',
          title: '出发前，先看这张路线图',
          icon: '🚀',
          color: '#ff7a45',
          forParent: true,
          markdown: `## 欢迎来到 Python 小学堂！

你马上就要成为一名小程序员啦！🎉 在按下开始之前，小光先带你看看：这趟旅程要去哪儿、怎么走、最后能变成多厉害的自己。心里有数，学起来才带劲！

### 🗺️ 我们的学习路线

这趟旅程分成一段一段的小关卡，像闯关游戏：

- 🧠 思维热身：先弄清程序是什么、顺序、循环——这是编程的底层脑回路
- 🐍 初识 Python：让电脑开口说话、算算术、写注释
- 🐢 海龟画图：用代码指挥小海龟，画出正方形、星星、彩虹
- 🔀 流程控制：学会如果就、循环数数、做决定
- 📦 数据小管家：列表、字典，把东西整整齐齐存好
- 🔧 函数与模块：把常用动作打包，随用随取
- 📁 文件与项目：做个真正的小游戏小工具，毕业！

> 不用一次全学会，一节一节来，每过一关你就强一点。

### 🎬 每一节是怎么展开的

每一课都像一次小冒险：

1. 看视频：小光用萌萌的动画把知识点讲清楚
2. 读讲义：大字加真人朗读，听不懂还能重听
3. 做练习：选择题、排序题、填空题、打字题——边玩边巩固
4. 小光讲一讲：一句话总结加生活里的发散，帮你记更牢
5. 收集勋章：闯过一关得一枚，集齐就是 Python 小学士

### 🏆 学完能达到什么

从完全不会到能自己写小游戏、单词本、自动算题器；更重要的是，你会长出一种编程思维——把大问题拆成一步步、找出规律、用循环偷懒。这本领，上学和生活都用得上！

### 👨‍👩‍👧 给爸爸妈妈的一段话

这个工具是给孩子自学、家长引导设计的：

- 🔓 家长解锁：孩子卡住时，你点一下就能解锁下一关，不用替他做
- 📊 学习报告：随时看最近一课做得怎么样，哪里需要帮一把
- 🔊 语音风格：亲切、梗王、严厉，按孩子性格切换
- ⌨️ 练字模块：单独练全部英文单词，打好打字底子
- 🏅 勋章墙：每走完大进度收集一枚，看得见成长

> 引导小贴士：多鼓励、少代做；让他自己试错，错了再看视频重来。你只需要在他泄气时，点一下解锁或夸一句你真棒。`,
          takeaway: '今天咱们先看了整张路线图：从思维热身一路闯到做小游戏，每节课都是看视频、读讲义、做练习、听小光讲一讲，闯关还能收集勋章！你不用一次全会，一节一节来就越来越强。爸爸妈妈也能用解锁、报告、语音风格这些功能陪着你。准备好，咱们出发啦！',
          video: 'video/py2.mp4',
          videoCaption: '出发前先看路线图：从思维热身闯到做小游戏，每节看视频、读讲义、做练习、听小光讲一讲，闯关收集勋章，家长还能用解锁和报告陪你！',
          words: [
            { en: 'ROUTE', zh: '路线：从哪走到哪的规划，像一张地图。' },
            { en: 'GOAL', zh: '目标：我们想达到的地方或本领。' },
            { en: 'JOURNEY', zh: '旅程：这趟学习大冒险。' }
          ],
          exercises: [
            { type: 'choice', question: '我们的学习路线，第一步思维热身主要练什么？', options: ['程序、顺序、循环的底层思维', '怎么写长作文', '怎么做饭'], answer: 0, explain: '先搞清程序和循环这些底层思维，后面学 Python 才顺。' },
            { type: 'choice', question: '家长面板里，孩子卡住时你可以做什么？', options: ['点一下解锁下一关', '替他把题全做了', '把工具关掉'], answer: 0, explain: '解锁是给机会，不是代做；多鼓励少代劳。' },
            { type: 'choice', question: '每节课的小光讲一讲，主要用来做什么？', options: ['一句话总结加生活发散，帮记忆', '放广告', '考试打分'], answer: 0, explain: '讲一讲是总结加发散，帮你在生活里也想得通。' },
            { type: 'typing', question: '照着敲一敲今天的新单词（打完会带你复习前面学过的词）：', words: ['ROUTE', 'GOAL', 'JOURNEY'] }
          ]
        }
      ]
    },
    {
      title: '第0章 思维热身',
      lessons: [
        {
          id: 'c0l1',
          title: '什么是程序',
          icon: '🤖',
          markdown: '## 程序就是一步一步的指令\n\n你教爸爸妈妈做三明治：先拿面包，涂果酱，再合起来。这一串"先做什么、再做什么"的步骤，电脑就叫它**程序**。\n\n> 程序 = 给电脑的一张"步骤清单"，它一步一步照着做。',
          figures: [{ key: 'robot_steps', caption: '🤖 机器人按步骤做三明治：程序就是一步步的指令' }],
          takeaway: '程序呀，其实就是给电脑写的一张做事清单，你写一步它做一步，一步一步来。',
          video: 'video/c0l1.mp4',
          videoCaption: '机器人照着步骤清单做三明治：先拿面包、涂果酱、合起来——一步一步按顺序做，这就是程序！',
          words: [],
          exercises: [
            { type: 'choice', question: '下面哪一组是"程序"？', options: ['随便乱按键盘', '先拿面包、涂果酱、合起来的步骤', '看电视'], answer: 1, explain: '程序是有顺序的步骤清单。' },
            { type: 'choice', question: '程序就是给电脑的一张什么清单？', options: ['零食清单', '步骤清单', '玩具清单'], answer: 1, explain: '程序是"步骤清单"，电脑一步一步照着做。' },
            { type: 'typing', question: '键盘小挑战：这一节是概念课，没有要敲的单词，点一下就通过啦～', words: ['STEP', 'ORDER', 'LIST'] },

      { type: 'coding', question: '程序就是给电脑的一串命令。写一行代码，让电脑说出：你好，程序！', starter: 'print("___")', expect: '你好，程序！', hint: '用 print 把要显示的话放在引号里，再点运行。' },]
        },
        {
          id: 'c0l2',
          video: 'video/c0l2.mp4',
          videoCaption: '小朋友先穿袜子再穿鞋，顺序一反就穿不进去——步骤的顺序很重要！',
          title: '顺序不能乱',
          icon: '👟',
          markdown: '## 顺序错了，结果就乱了\n\n穿鞋穿袜子：\n\n- ✅ 正确：先穿袜子，再穿鞋\n- ❌ 错了：先穿鞋，再想穿袜子——穿不进去！\n\n程序里的步骤**顺序很重要**。同样几步，换个顺序，结果可能完全不一样。',
          figures: [{ key: 'sequence_wrong', caption: '👟 先穿袜再穿鞋才对，顺序一反就乱套' }],
          takeaway: '写清单的时候，顺序可有讲究啦！先说哪步后说哪步，电脑就严格照着来，顺序一乱，结果就乱套了。',
          words: [
            { en: 'order', zh: '顺序：谁先谁后的排列方法。' },
            { en: 'first', zh: '首先、第一步：最先要做的那一步。' },
            { en: 'next', zh: '接下来、下一个：紧跟着要做的下一步。' }
          ],
          exercises: [
            { type: 'order', question: '起床出门，把步骤按正确顺序排一排：', steps: ['睁开眼', '穿衣服', '刷牙洗脸', '背上书包出门'], explain: '按真实生活顺序：先睁眼，再穿衣、洗漱，最后出门。' },
            { type: 'choice', question: '想画出正方形，下面哪句最重要？', options: ['随便画', '按正确的顺序画四条边', '只画一条线'], answer: 1, explain: '顺序对了，画出来的才是正方形。' },
            { type: 'typing', question: '照着敲一敲今天的新单词（打完会带你复习前面学过的词）：', words: ['ORDER', 'FIRST', 'NEXT'] },

      { type: 'coding', question: '电脑从上到下依次执行命令。写三行 print，依次打印数字 1、2、3。', starter: 'print(1)\nprint(2)\nprint(3)', expect: '1\n2\n3', hint: '一行一行写，电脑会按顺序做。' },]
        },
        {
          id: 'c0l3',
          video: 'video/c0l3.mp4',
          videoCaption: '每天刷牙不用写365遍，说一句"每天→刷牙"电脑就自动重复，这就是循环！',
          title: '循环真省力',
          icon: '🔁',
          markdown: '## 重复的事，用"循环"一句话搞定\n\n每天刷牙，要写 365 遍吗？不用！只说一句：**每天 → 刷牙**。电脑就自动重复做。\n\n这种"重复做同一件事"的本领，叫**循环**。',
          figures: [{ key: 'loop_teeth', caption: '🔁 每天刷牙：不用写 365 遍，循环一句话搞定' }],
          takeaway: '循环就像说“这个动作重复做十遍”，电脑二话不说就帮你一遍遍做，省得你抄十次。',
          words: [
            { en: 'loop', zh: '循环：让电脑把同一件事重复做很多次。' },
            { en: 'again', zh: '再一次：再来一遍。' },
            { en: 'repeat', zh: '重复：一遍又一遍地做同一件事。' }
          ],
          exercises: [
            { type: 'choice', question: '下面哪种情况最适合用"循环"？', options: ['只做一次的事', '把同一件事重复很多次', '什么都不做'], answer: 1, explain: '重复很多次的事，用循环最省力。' },
            { type: 'choice', question: '让电脑重复做一件事，这种本领叫什么？', options: ['循环', '睡觉', '画画'], answer: 0, explain: '循环 = 重复做同一件事，省时省力。' },
            { type: 'typing', question: '照着敲一敲今天的新单词（打完会带你复习前面学过的词）：', words: ['LOOP', 'AGAIN', 'REPEAT'] },

      { type: 'coding', question: '用循环算 1+2+3 的和，把结果打印出来（不用写三行加法）。', starter: 'total = 0\nfor i in range(1, 4):\n    total = total + i\nprint(___)', expect: '6', hint: '把累加好的变量 total 打印出来。' },]
        }
      ]
    },
    {
      title: '第1章 初识 Python',
      lessons: [
        {
          id: 'c1l1',
          video: 'video/c1l1.mp4',
          videoCaption: '电脑像喇叭，print("你好") 一喊，屏幕就说出话来！',
          title: '第一个程序：让电脑说话',
          icon: '🗣',
          markdown: '## print：让电脑开口说话\n\n第一个 Python 程序，让电脑说"你好"：\n\n```\nprint("你好")\n```\n\n`print` 像喇叭：**引号里写什么，电脑就说什么**。',
          figures: [{ key: 'print_hello', caption: '🗣 print("你好") 让电脑开口说话' }],
          takeaway: '想让电脑开口说话？用 print 再戴上小引号，里面写啥它就念啥，神气吧！',
          code: 'print("你好")\nprint("我是小程序员")\nname = "小光"\nprint("你好，" + name)',
          exercises: [
            { type: 'choice', question: '想让电脑说话，要用哪个命令？', options: ['print', 'input', 'def'], answer: 0, explain: 'print 是 Python 里的"喇叭"，负责输出文字。' },
            { type: 'choice', question: 'print("嗨") 会在屏幕上显示什么？', options: ['什么都没有', '嗨', 'print'], answer: 1, explain: '引号里的内容会被 print 显示出来。' },
            { type: 'typing', question: '敲一敲最常用的命令词：', words: ['PRINT', 'HELLO', 'PYTHON'] },

      { type: 'coding', question: '让电脑说出：你好，Python！', starter: 'print("___")', expect: '你好，Python！', hint: '用 print 把想说的话放在引号里。' },]
        },
        {
          id: 'c1l2',
          video: 'video/c1l2.mp4',
          videoCaption: '电脑是个超快计算器，3+4、5×6 一下就算出答案！',
          title: '电脑会算数',
          icon: '🔢',
          markdown: '## 电脑是个超快计算器\n\nPython 会做加减乘除：\n\n- 加 `+`：`3 + 4` 得 7\n- 减 `-`：`10 - 2` 得 8\n- 乘 `*`：`5 * 6` 得 30\n- 除 `/`：`20 / 4` 得 5\n\n电脑算得又快又不会累。',
          figures: [{ key: 'calculator', caption: '🔢 加减乘除：电脑比手算快多啦' }],
          takeaway: '加减乘除 Python 全会，加号减号乘号星号除号斜杠，它算得比你还快，是个超级计算器！',
          code: 'print(3 + 4)\nprint(10 - 2)\nprint(5 * 6)\nprint(20 / 4)',
          exercises: [
            { type: 'choice', question: 'Python 里乘法用哪个符号？', options: ['*', 'x', '+'], answer: 0, explain: '注意是星号 *，不是字母 x。' },
            { type: 'choice', question: '10 / 2 的结果是？', options: ['5', '8', '20'], answer: 0, explain: '除号 / 表示除法，10 除以 2 等于 5。' },
            { type: 'typing', question: '敲一敲运算符号词：', words: ['PLUS', 'TIMES', 'MATH'] },

      { type: 'coding', question: '让电脑算 15 加 27 等于多少，把结果打印出来。', starter: 'print(15 + 27)', expect: '42', hint: '加号 + 表示相加，电脑会帮你算。' },]
        },
        {
          id: 'c1l3',
          video: 'video/c1l3.mp4',
          videoCaption: '用 # 写小纸条给程序，电脑看了会跳过不执行。',
          title: '注释与关键词',
          icon: '📝',
          markdown: '## 给程序写小纸条\n\n想写句话提醒自己、但不让电脑执行，用**注释**：\n\n```\n# 这是注释，电脑会跳过\nprint("你好")  # 这一行后面也是注释\n```\n\n注释用 `#` 开头。另外 Python 有几个**关键词**（如 `print`、`for`）是专用词，不能乱当名字用。',
          figures: [{ key: 'print_hello', caption: '📝 # 开头的是注释，电脑会跳过不执行' }],
          takeaway: '在代码旁边用井号 # 写句话，那是给看代码的人留的小纸条，电脑不看它；还有那些专门的词叫关键词，是电脑的专用词，不能乱用。',
          code: '# 这是一行注释\nprint("你好")  # 后面也可以写注释\n# print("这句不会显示")',
          exercises: [
            { type: 'choice', question: 'Python 里用哪个符号写注释？', options: ['#', '//', '/*'], answer: 0, explain: '井号 # 后面到行尾都是注释。' },
            { type: 'choice', question: '下面哪行是注释，电脑会跳过？', options: ['print("嗨")', '# 这是提醒', '3 + 4'], answer: 1, explain: '# 开头的是注释。' },
            { type: 'typing', question: '敲一敲注释符号和命令：', words: ['HASH', 'NOTE', 'CODE'] },

      { type: 'coding', question: '第一行写注释说明这行在做什么（以 # 开头），再让电脑打印：我在学 Python。', starter: '# 说明：下面要显示一句话\nprint("___")', expect: '我在学 Python', hint: '# 后面是注释电脑会跳过；引号里写要显示的话。' },]
        }
      ]
    },
    {
      title: '第2章 变量与数据',
      lessons: [
        {
          id: 'c2l1',
          video: 'video/c2l1.mp4',
          videoCaption: '变量像贴了名字的小盒子，name 盒子里装着"小光"。',
          title: '变量：给东西起名字',
          icon: '📦',
          markdown: '## 变量 = 贴了名字的小盒子\n\n电脑里有很多"小盒子"，给盒子贴个名字，里面放东西：\n\n```\nname = "小光"\nage = 7\n```\n\n以后想用这个东西，叫它的名字就行。',
          figures: [{ key: 'variable_box', caption: '📦 变量 = 贴了名字的小盒子，里面放东西' }],
          takeaway: '变量呀，就像贴了名字的小盒子，你把数字、文字塞进去，以后喊名字就能把东西取出来。',
          code: 'name = "小光"\nage = 7\nprint(name)\nprint("我今年", age, "岁")',
          exercises: [
            { type: 'choice', question: 'name = "小光" 中，name 是一个___。', options: ['变量', '函数', '盒子'], answer: 0, explain: 'name 是变量名，盒子里存着"小光"。' },
            { type: 'choice', question: '下面哪句是把 7 放进 age 盒子？', options: ['age = 7', '7 = age', 'print age'], answer: 0, explain: '等号左边是变量名，右边是存进去的值。' },
            { type: 'typing', question: '敲一敲变量的命令词：', words: ['NAME', 'AGE', 'VAR'] },

      { type: 'coding', question: '把数字 10 存进变量 age，再打印 age。', starter: 'age = ___\nprint(age)', expect: '10', hint: '等号 = 是“存起来”，把 10 放进 age。' },]
        },
        {
          id: 'c2l2',
          video: 'video/c2l2.mp4',
          videoCaption: '数字算数、文字说话、True/False 做判断，三种数据各司其职。',
          title: '数据类型',
          icon: '🔤',
          markdown: '## 三种常见的数据\n\n盒子里可以放不同种类的东西：\n\n- 🔢 **数字**：`7`、`3.14`，用来算数\n- 🔤 **文字**：`"你好"`，放在引号里，用来说话\n- ✅ **真假**：`True` / `False`，用来做判断\n- 🔄 **类型转换**：数字想和文字拼一起，先用 `str()` 变成文字：`str(7)` 得 `"7"`；文字想当数字算，用 `int()`：`int("10")` 得 `10`；带小数点的用 `float()`\n\n同一件事用对类型很重要，需要时还能互相转换。',
          figures: [{ key: 'data_types', caption: '🔤 数字算数、文字说话、真假做判断' }],
          takeaway: '电脑里的东西分三种常见模样：数字、文字、还有真假对错，它们叫数据类型。',
          code: 'n = 7\nword = "你好"\nisSunny = True\nprint(n, word, isSunny)',
          exercises: [
            { type: 'choice', question: '"你好" 属于哪种类型？', options: ['数字', '文字', '真假'], answer: 1, explain: '带引号的是文字（字符串）。' },
            { type: 'choice', question: '表示"对或错"的类型写___（英文）。', options: ['True 和 False', '数字和文字', '列表和字典'], answer: 0, explain: '真假类型是 True 和 False。' },
            { type: 'typing', question: '敲一敲类型相关的词：', words: ['TEXT', 'NUM', 'BOOL'] },
            { type: 'choice', question: '想把数字 7 和文字拼在一起显示，要先怎么做？', options: ['直接相加', 'str(7) 变成文字', 'int(7)'], answer: 1, explain: 'str(7) 把数字变成文字 "7"，才能和别的文字拼在一起。' },

      { type: 'coding', question: 'a 是数字 3，b 是文字 \'猫\'。分别打印它们，看看电脑怎么区分数字和文字。', starter: 'a = 3\nb = \'猫\'\nprint(a)\nprint(___)', expect: '猫', hint: '第二行打印变量 b（那只猫）。' },]
        },
        {
          id: 'c2l3',
          video: 'video/c2l3.mp4',
          videoCaption: 'input 让电脑开口问"你几岁？"，你回答它就记住。',
          title: '让电脑提问：input',
          icon: '💬',
          markdown: '## input：让电脑问你话\n\n`print` 是电脑说，`input` 是电脑**问**，你回答：\n\n```\nage = input("你几岁？")\nprint("你", age, "岁啦")\n```\n\n电脑问"你几岁？"，你打字回答，它就记住放进盒子。',
          figures: [{ key: 'input_ask', caption: '💬 input 让电脑提问，你回答它就记住' }],
          takeaway: '用 input，电脑就能反过来问你话，你打的回答它会乖乖存好，等着后面用。',
          code: 'age = input("你几岁？")\nprint("你", age, "岁啦")',
          exercises: [
            { type: 'choice', question: '让电脑向你提问，要用___。', options: ['input', 'print', 'output'], answer: 0, explain: 'input 负责接收你的输入。' },
            { type: 'choice', question: 'age = input("几岁？") 做完后，age 里装的是？', options: ['电脑猜的数', '你回答的内容', '什么都没有'], answer: 1, explain: 'input 会把你的回答存进变量。' },
            { type: 'typing', question: '敲一敲提问的命令词：', words: ['INPUT', 'ASK', 'ANSWER'] },

      { type: 'coding', question: '把喜欢的颜色存进变量 color，再打印：我喜欢红色（用你存的变量接在后面）。', starter: 'color = \'红色\'\nprint(\'我喜欢\' + ___)', expect: '我喜欢红色', hint: '加号 + 可以把两段文字连起来；把变量 color 接在后面。' },]
        },
        {
          id: 'c2l4',
          video: 'video/c2l4.mp4',
          videoCaption: '字符串会量长度、变大写、把变量塞进句子，文字也会变魔术！',
          title: '字符串：文字的魔法',
          icon: '🪄',
          markdown: '## 字符串：文字也会变魔术\n\n你用 `print("你好")` 让电脑说话，引号里那串字在 Python 里叫**字符串**——就是"一串文字"。它不只会"被打印"，还会好多魔法：\n\n- 📏 **量一量**：`len("猫咪")` 得 `2`（数数有几个字）\n- ✂️ **切一段**：`"hello"[1:3]` 得 `"el"`（从第 1 个切到第 3 个前，电脑从 0 开始数）\n- 🔠 **变大变小**：`"hi".upper()` 得 `"HI"`，`"HI".lower()` 得 `"hi"`\n- 🧩 **把变量塞进句子**：`f"我叫{name}"` 最省事，不用拼来拼去（这叫 f-string）\n- ➕ **拆成列表**：`"苹果,香蕉".split(",")` 变成 `["苹果","香蕉"]`\n\n> 字符串是 14 岁一定要玩透的：以后处理名字、句子、密码都离不开它。',
          figures: [{ key: 'string_magic', caption: '🪄 字符串会量长度、切片段、变大写、把变量直接塞进句子' }],
          takeaway: '文字串可厉害了：能量长短、能切一段、能变大变小写，还能用 f-string 把变量塞进句子里，也能拆成一串小格子。',
          code: 'name = "小光"\nprint("我叫" + name)\nprint("大写：" + name.upper())\nprint("字数：" + str(len(name)))\nprint(f"欢迎你，{name}！")',
          words: [],
          exercises: [
            { type: 'choice', question: '下面哪项是"字符串"？', options: ['123', '"你好"', 'True'], answer: 1, explain: '带引号的一串文字才是字符串。' },
            { type: 'choice', question: '"hi".upper() 的结果是？', options: ['"hi"', '"HI"', '"Hi"'], answer: 1, explain: 'upper 把字母变成大写。' },
            { type: 'typing', question: '敲一敲字符串魔法相关的词：', words: ['TEXT', 'UPPER', 'FORMAT'] },

      { type: 'coding', question: '用 upper() 把 \'hello\' 变成大写并打印。', starter: 's = \'hello\'\nprint(s.___())', expect: 'HELLO', hint: '在 s 后面写 .upper() 可以变成大写。' },]
        },
        {
          id: 's1',
          title: '🌟 进度一总结：我让电脑听话啦！',
          icon: '🌱',
          kind: 'summary',
          progress: 1,
          award: { p: 1, title: '编程小萌芽', badge: '🌱', desc: '走完编程启蒙第一段：懂了程序、写出了第一个程序、会存变量与数据。' },
          markdown: '## 🌱 进度一总结：你已经是「编程小萌芽」啦！\n\n这一段你从完全不认识程序，走到了能让电脑乖乖听话：\n\n- 🤖 **什么是程序**：程序就是给电脑的一张步骤清单，你写步骤、它来执行。\n- 👟 **顺序很重要**：先穿袜再穿鞋，顺序一乱结果就乱。\n- 🗣 **第一个程序**：你让电脑 print 说话、帮我们算算术。\n- 💬 **注释与关键词**：# 后面是给人看的悄悄话，真正的命令才让电脑动。\n- 📦 **变量**：给东西起名字，电脑就帮你记住它（数字、文字都能存）。\n- 🔤 **字符串**：带引号的一串文字，能拼、能改大小写、能量长度。\n- ⌨️ **让电脑提问**：input 让程序停下来听你说话。\n\n### 🚀 用学到的知识，你现在能做这些事\n- 写一个会跟你打招呼的小机器人（问你叫什么，再叫你的名字）。\n- 写一个小小的计算器（加加减减随你按）。\n- 把你的名字存起来，再让电脑倒着拼出来',
          takeaway: '这一段咱们把地基打牢啦：你搞懂了什么是程序、写出了第一个程序、还会用盒子和数据存东西。来，给你戴上 🌱 编程小萌芽 的勋章！',
          encourage: {
            gentle: '宝贝，你真的超棒！你现在已经不是“看电脑的人”，而是“指挥电脑的人”了。点下面的「完成本节」，你的 🌱 编程小萌芽 勋章就到手啦，下一关戴着它出发～',
            humor: '嚯，从“程序是啥”到“电脑听你话”，这一段你居然全啃下来了！点「完成本节」领走 🌱 编程小萌芽 勋章——这下你是有身份（和勋章）的人了。走，下一段去看电脑怎么画图画、做决定！',
            strict: '这一段基础打得还行：程序、变量、数据，你都摸着门道了。点「完成本节」，🌱 编程小萌芽 勋章归你。别飘，下一段才是真本事——电脑怎么画图、怎么做决定。',
          },
          exercises: [
          { type: 'choice', question: '想让电脑在屏幕上说出“你好”，要用哪个命令？', options: ['print', 'input', 'def'], answer: 0, explain: 'print 是 Python 的“喇叭”，引号里写什么就显示什么。' },
          { type: 'choice', question: '“你好” 这种带引号的一串文字，在 Python 里叫什么？', options: ['数字', '字符串', '列表'], answer: 1, explain: '带引号的是字符串，专门用来处理文字。' },
          { type: 'choice', question: '想把数字 7 和文字拼在一起显示，正确做法是？', options: ['直接 7 + "岁"', 'str(7) 先变成文字再拼', 'int("7")'], answer: 1, explain: 'str(7) 把数字变成文字 "7"，才能和别的文字拼起来。' },
          { type: 'tap', multi: true, question: '下面哪些属于 Python 里常见的数据类型？（对的都点出来）', options: ['数字（用来算数）', '文字 / 字符串', '真假 True / False', '海龟（小宠物）'], answer: [0, 1, 2], explain: '数字、字符串、真假是三种常见类型；海龟是画图工具，不是数据类型。' },
          { type: 'typing', question: '照着敲一敲这一段学过的关键词：', words: ['PRINT', 'PYTHON', 'VARIABLE', 'STRING', 'INPUT', 'LOOP'] },
          { type: 'coding', question: '🐣 编程题 1：用 print 在屏幕上打印出：你好，世界！（只要引号里的内容）', starter: 'print("")', expect: '你好，世界！' },
          { type: 'coding', question: '🐣 编程题 2：变量 x 存 10、y 存 4，打印 x 减 y 的结果。', starter: 'x = 10\ny = 4\nprint()', expect: '6' },
          { type: 'coding', question: '🐣 编程题 3：用 len() 量一量字符串 "Python" 一共有几个字，并打印出来。', starter: 'print(len("Python"))', expect: '6' }
        ]
        }
      ]
    },
    {
      title: '第3章 海龟画图',
      lessons: [
        {
          id: 'c3l1',
          video: 'video/c3l1.mp4',
          videoCaption: '小海龟听指令：前进、左转、右转，走过留下线就画出图。',
          title: '海龟来了',
          icon: '🐢',
          markdown: '## 一只听指令的小海龟\n\nPython 里有一只小海龟 🐢，你下指令它就动：\n\n- `forward(100)`：向前走 100 步\n- `left(90)`：向左转 90 度\n- `right(90)`：向右转 90 度\n\n它走过的地方留下线，于是就画出图啦！',
          figures: [{ key: 'turtle_move', caption: '🐢 海龟听指令：前进、后退、左转、右转' }],
          takeaway: '小海龟听你指挥：forward 往前、back 往后、left 左转、right 右转，你下命令它就走。',
          code: 'forward(100)\nleft(90)\nforward(100)',
          exercises: [
            { type: 'choice', question: '让海龟向前走 100 步，写___。', options: ['forward(100)', 'back(100)', 'left(100)'], answer: 0, explain: 'forward 是向前走，括号里是步数。' },
            { type: 'choice', question: '想让海龟向左转，用哪个？', options: ['right(90)', 'left(90)', 'forward(90)'], answer: 1, explain: 'left 是向左转，right 是向右转。' },
            { type: 'typing', question: '敲一敲海龟的指令词：', words: ['FORWARD', 'LEFT', 'RIGHT'] },

      { type: 'coding', question: '小海龟每走一步留下痕迹。用循环打印 5 个星号 *，像小海龟画的短线（用 end="" 让它们连在一起）。', starter: 'for i in range(5):\n    print("*", end="")', expect: '*****', hint: 'range(5) 会重复 5 次；end="" 让它们不换行。' },]
        },
        {
          id: 'c3l2',
          video: 'video/c3l2.mp4',
          videoCaption: '前进再左转重复四次，正方形就画好啦！',
          title: '画一个图形',
          icon: '🔷',
          markdown: '## 组合指令画出形状\n\n画一个正方形，就是：向前走、左转、向前走、左转……重复 4 次。\n\n```\nfor i in range(4):\n    forward(100)\n    left(90)\n```\n\n> `for` 是循环（下一章细学），把"前进+左转"自动重复 4 次。',
          figures: [{ key: 'turtle_square', caption: '🔷 前进+左转重复 4 次，正方形就画好了' }],
          takeaway: '把前进和转弯像搭积木一样拼起来，让它走四步转四次，嘿，一个正方形就画出来啦！',
          code: 'for i in range(4):\n    forward(100)\n    left(90)',
          exercises: [
            { type: 'order', question: '画正方形要按什么顺序重复？', steps: ['forward(100)', 'left(90)', 'forward(100)', 'left(90)', 'forward(100)', 'left(90)', 'forward(100)', 'left(90)'], explain: '先向前画一边，再左转，重复四次就画出正方形。' },
            { type: 'choice', question: '正方形有几条边？', options: ['3', '4', '5'], answer: 1, explain: '正方形有 4 条一样长的边。' },
            { type: 'typing', question: '敲一敲画图的词：', words: ['SQUARE', 'DRAW', 'SHAPE'] },

      { type: 'coding', question: '用循环打印 4 行 ***，像小海龟画的一堵墙。', starter: 'for i in range(4):\n    print("***")', expect: '***\n***\n***\n***', hint: '每循环一次打印一行 ***。' },]
        },
        {
          id: 'c3l3',
          video: 'video/c3l3.mp4',
          videoCaption: '循环让海龟转着圈画，一圈下来变出一朵花！',
          title: '用循环画漂亮的图案',
          icon: '🌸',
          markdown: '## 循环 + 海龟 = 漂亮图案\n\n只画一个正方形有点孤单。用循环让它转着圈画很多次：\n\n```\nfor i in range(8):\n    forward(80)\n    left(45)\n```\n\n每画一边就转 45 度，转一圈下来，就成了一朵花🌸！',
          figures: [{ key: 'loop_pattern', caption: '🌸 循环让海龟转着圈画，变成漂亮图案' }],
          takeaway: '循环套上海龟，让它转着圈重复画，就能变出一朵花那么漂亮的图案，神奇不？',
          code: 'for i in range(8):\n    forward(80)\n    left(45)',
          exercises: [
            { type: 'choice', question: '想重复画 8 次，循环里写 range(___)。', options: ['8', '7', '9'], answer: 0, explain: 'range(8) 表示重复 8 次。' },
            { type: 'choice', question: '下面哪段能画出重复图案？', options: ['只写一次 forward', '用 for 循环重复 forward 和 left', '什么都不写'], answer: 1, explain: '循环重复指令，才能画出重复的图案。' },
            { type: 'typing', question: '敲一敲循环画图的词：', words: ['LOOP', 'FLOWER', 'SPIN'] },

      { type: 'coding', question: '用两层 for 循环打印一个 3 行 3 列的 * 方阵。', starter: 'for r in range(3):\n    for c in range(3):\n        print("*", end="")\n    print()', expect: '***\n***\n***', hint: '内层循环画一行，外层循环负责换到下一行。' },]
        }
      ]
    },
    {
      title: '第4章 流程控制',
      lessons: [
        {
          id: 'c4l1',
          video: 'video/c4l1.mp4',
          videoCaption: 'if 像红绿灯：满足条件才走，不满足就停下。',
          title: 'if：做决定',
          icon: '🚦',
          markdown: '## if：满足条件才做\n\n电脑也会"看情况办事"：\n\n```\nif 下雨:\n    带伞\n```\n\n`if` 意思是"如果"。**如果**条件成立，就做里面的事；不成立就跳过。\n\n比大小要用**比较符号**：`>` 大于、`<` 小于、`==` 等于、`!=` 不等于。比如 `if age > 10:` 表示"年龄大于 10"。还可以用 `and` 把两个判断连起来：`if age > 6 and age < 12:` 表示"大于 6 并且小于 12 之间"。',
          figures: [{ key: 'if_branch', caption: '🚦 if 满足条件才做里面的事，否则跳过' }],
          takeaway: 'if 就是“如果……那就……”：你给个条件，电脑判断对了才动手，像做选择题。',
          code: 'weather = "下雨"\nif weather == "下雨":\n    print("带伞")',
          exercises: [
            { type: 'choice', question: 'Python 里"如果"用哪个词？', options: ['if', 'when', 'check'], answer: 0, explain: 'if 表示条件判断。' },
            { type: 'choice', question: 'if 雨大: 带伞——不下雨时会怎样？', options: ['也带伞', '跳过不带伞', '电脑坏掉'], answer: 1, explain: '条件不成立，if 里的代码就被跳过。' },
            { type: 'typing', question: '敲一敲判断的词：', words: ['IF', 'WHEN', 'TEST'] },
            { type: 'choice', question: 'if age > 6 and age < 12: 什么时候成立？', options: ['age 是 8', 'age 是 3', 'age 是 20'], answer: 0, explain: '8 既大于 6 又小于 12，and 两边都真才成立。' },

      { type: 'coding', question: '变量 score 是 90。如果 score 大于等于 60，就打印：及格啦！', starter: 'score = 90\nif score >= 60:\n    print("___")', expect: '及格啦！', hint: '在 if 下面缩进一行，写下要打印的话。' },]
        },
        {
          id: 'c4l2',
          video: 'video/c4l2.mp4',
          videoCaption: 'if 做对的事，else 做否则的事，elif 再加一个岔路口。',
          title: 'if-else 与 elif',
          icon: '⚖️',
          markdown: '## 不是这样，就是那样\n\n分两种情况：\n\n```\nif 得分 >= 60:\n    print("及格")\nelse:\n    print("再加油")\n```\n\n`else` 是"否则"。还可以用 `elif`（否则如果）加更多分支。',
          figures: [{ key: 'if_branch', caption: '⚖️ if 做对的事，else 做否则的事' }],
          takeaway: 'if 管“对的咋办”，else 管“不然咋办”，elif 还能加更多“要是那样就……”，分叉越来越多。',
          code: 'score = 85\nif score >= 60:\n    print("及格啦")\nelse:\n    print("再加油")',
          exercises: [
            { type: 'choice', question: '"否则"在 Python 里写___。', options: ['else', 'elif', 'if'], answer: 0, explain: 'else 表示前面的条件都不成立时执行。' },
            { type: 'choice', question: '想加第三个分支，用哪个词？', options: ['elif', 'elseif', 'other'], answer: 0, explain: 'Python 里"否则如果"是 elif。' },
            { type: 'typing', question: '敲一敲分支的词：', words: ['ELSE', 'ELIF', 'BRANCH'] },

      { type: 'coding', question: '变量 n 是 8。如果是偶数打印“偶数”，否则打印“奇数”。', starter: 'n = 8\nif n % 2 == 0:\n    print("偶数")\nelse:\n    print("奇数")', expect: '偶数', hint: '% 是取余，n % 2 == 0 表示能被 2 整除。' },]
        },
        {
          id: 'c4l3',
          video: 'video/c4l3.mp4',
          videoCaption: 'for 带着数字0、1、2、3、4，一件事自动重复五遍。',
          title: 'for：按顺序数数',
          icon: '🔢',
          markdown: '## for：把一件事重复做 N 次\n\n```\nfor i in range(5):\n    print(i)\n```\n\n会打印 0、1、2、3、4，一共 5 次。`range(5)` 就是"数 5 个数"。',
          figures: [{ key: 'for_count', caption: '🔢 for i in range(5)：从 0 数到 4 自动重复 5 次' }],
          takeaway: 'for 和 range 是好搭档：你告诉它重复几次，它就把一件事自动做 N 遍，不用你抄。',
          code: 'for i in range(5):\n    print("第", i, "次")',
          exercises: [
            { type: 'choice', question: '想重复 5 次，写 for i in range(___)。', options: ['5', '4', '6'], answer: 0, explain: 'range(5) 表示重复 5 次。' },
            { type: 'choice', question: 'for i in range(3): 会重复几次？', options: ['2', '3', '4'], answer: 1, explain: 'range(3) 重复 3 次。' },
            { type: 'typing', question: '敲一敲循环的词：', words: ['FOR', 'RANGE', 'REPEAT'] },

      { type: 'coding', question: '用 for 循环打印 1 到 5（含 5）。', starter: 'for i in range(1, ___):\n    print(i)', expect: '5', hint: 'range(1, 6) 表示从 1 数到 5。' },]
        },
        {
          id: 'c4l4',
          video: 'video/c4l4.mp4',
          videoCaption: 'while 一直做直到吃饱，break 跳出、continue 跳过这一轮。',
          title: 'while 与 break、continue',
          icon: '🔄',
          markdown: '## while：条件成立就一直做\n\n```\nwhile 没吃饱:\n    吃一口\n```\n\n`while` 一直重复，直到条件不成立才停。还有两个小帮手：\n- `break`：**立刻跳出**循环\n- `continue`：**跳过这一次**，进下一轮',
          figures: [{ key: 'while_repeat', caption: '🔄 while 一直做直到条件不成立；break 跳出、continue 跳过' }],
          takeaway: 'while 是“只要条件对就一直做”；break 像急刹车直接跳出，continue 是跳过这一轮接着下一轮。',
          code: 'n = 0\nwhile n < 5:\n    n = n + 1\n    if n == 3:\n        continue\n    print(n)',
          exercises: [
            { type: 'choice', question: '想立刻跳出循环，用___。', options: ['break', 'stop', 'exit'], answer: 0, explain: 'break 会马上结束整个循环。' },
            { type: 'choice', question: 'while 什么时候停下来？', options: ['永远不停', '条件不成立时', '数到 100 时'], answer: 1, explain: 'while 在条件不成立时才结束。' },
            { type: 'typing', question: '敲一敲循环控制的词：', words: ['WHILE', 'BREAK', 'SKIP'] },

      { type: 'coding', question: '用 while 循环从 1 数到 3 并打印。', starter: 'i = 1\nwhile i <= 3:\n    print(i)\n    i = i + 1', expect: '3', hint: '每循环一次让 i 加 1，否则会一直停不下来。' },]
        },
        {
          id: 'c4l5',
          video: 'video/c4l5.mp4',
          videoCaption: 'and 要两边都行、or 有一边就行、not 把对错反过来，开关连起来。',
          title: '布尔与逻辑：把条件连起来',
          icon: '🔗',
          markdown: '## 用 and / or / not 把判断连起来\n\n前面的 `if` 一次只看一个条件。真实情况常常要"又…又…"或"或者…"：\n\n- **and（并且）**：两边都成立才成立。`age > 6 and age < 12` → "大于 6 并且小于 12"\n- **or（或者）**：有一边成立就成立。`下雨 or 刮风` → "下雨或者刮风都带伞"\n- **not（不是）**：把对错反过来。`not 晴天` → "不是晴天"\n\n> 把多个小开关连起来，电脑就能做更复杂的决定，这是 14 岁必须掌握的思考方式。',
          figures: [{ key: 'logic_gate', caption: '🔗 and 要两边都行，or 有一边就行，not 把对错反过来' }],
          takeaway: 'and、or、not 是把好几个条件粘起来的胶水：并且、或者、反过来，电脑就能做更复杂的判断。',
          code: 'age = 8\nif age > 6 and age < 12:\n    print("你是小学生")\nif age < 3 or age > 60:\n    print("需要特别照顾")\nif not (age > 100):\n    print("还是年轻人")',
          words: [],
          exercises: [
            { type: 'choice', question: 'age=8，age>6 and age<12 成立吗？', options: ['成立', '不成立', '电脑会报错'], answer: 0, explain: '8 既大于 6 又小于 12，and 两边都真，所以成立。' },
            { type: 'choice', question: '想表达"下雨或者刮风都带伞"，用哪个词？', options: ['and', 'or', 'not'], answer: 1, explain: 'or 表示"或者"，有一边成立就行。' },
            { type: 'typing', question: '敲一敲逻辑词：', words: ['AND', 'OR', 'NOT'] },

      { type: 'coding', question: '变量 age=12，has_ticket=True。如果 age>=6 并且 has_ticket 为真，就打印：可以进场。', starter: 'age = 12\nhas_ticket = True\nif age >= 6 and has_ticket:\n    print("可以进场")', expect: '可以进场', hint: 'and 表示“并且”，两个条件都要满足。' },]
        }
      ]
    },
    {
      title: '第5章 数据结构',
      lessons: [
        {
          id: 'c5l1',
          video: 'video/c5l1.mp4',
          videoCaption: '列表像一排编了号的格子，fruits[0] 拿出第一个苹果。',
          title: '列表：一排格子',
          icon: '📋',
          markdown: '## 列表 = 一排编了号的格子\n\n想存很多水果？用列表：\n\n```\nfruits = ["苹果", "香蕉", "葡萄", "橘子"]\n```\n\n电脑从 0 开始编号。想拿第 2 个，写 `fruits[1]`。列表还会"中间插队"和"拿东西"：\n\n- 在中间插一个：`fruits.insert(1, "西瓜")`（插到第 1 号位置）\n- 拿走一个：`fruits.pop(0)`（拿走第 0 个）\n- 数某个出现了几次：`fruits.count("苹果")`',
          figures: [{ key: 'list_grid', caption: '📋 列表是一排编了号的格子，用编号找第几个' }],
          takeaway: '列表就像一排带号码的小格子，1号2号3号，喊号码就能拿出里面的东西，整齐又好找。',
          code: 'fruits = ["苹果", "香蕉", "葡萄"]\nprint(fruits[0])\nprint(fruits[1])',
          exercises: [
            { type: 'choice', question: 'fruits = ["苹果","香蕉"]，第一个是 fruits[___]。', options: ['0', '1', '-1'], answer: 0, explain: '列表编号从 0 开始，第一个是 0。' },
            { type: 'choice', question: '哪个能存多个东西？', options: ['一个数字', '一个列表', '一个字'], answer: 1, explain: '列表可以装很多个值。' },
            { type: 'typing', question: '敲一敲列表相关的词：', words: ['LIST', 'ARRAY', 'ITEM'] },
            { type: 'choice', question: 'fruits.insert(1, "西瓜") 会做什么？', options: ['把西瓜换成第 1 个', '在第 1 号位置插入西瓜', '删除西瓜'], answer: 1, explain: 'insert(位置, 内容) 在指定位置插入新元素。' },

      { type: 'coding', question: '创建列表 fruits = [\'苹果\',\'香蕉\',\'橙子\']，打印它的长度（有几个水果）。', starter: 'fruits = [\'苹果\',\'香蕉\',\'橙子\']\nprint(___)', expect: '3', hint: '用 len(列表) 可以数出有几个。' },]
        },
        {
          id: 'c5l2',
          video: 'video/c5l2.mp4',
          videoCaption: '列表会长大(append)、会排队(sort)、还能切片拿出一段。',
          title: '列表进阶：增删与排序',
          icon: '➕',
          markdown: '## 列表会长大、会变小、会排队、会改\n\n- 加一个：`fruits.append("西瓜")`\n- 数一数：`len(fruits)`\n- 拿出一段：`fruits[0:2]`（切片）\n- 改一个：`fruits[0] = "西瓜"`（用编号换掉旧值）\n- 删一个：`fruits.remove("香蕉")`\n- 排顺序：`fruits.sort()`\n\n列表很灵活，想加就加、想改就改、想排就排。',
          figures: [{ key: 'list_grid', caption: '➕ 列表能追加、数数、切片、排序，很灵活' }],
          takeaway: '列表很灵活：能往尾巴加新东西、能数数有几件、能切一段出来、还能排排坐排好序。',
          code: 'fruits = ["香蕉", "苹果", "葡萄"]\nfruits.append("西瓜")\nfruits.sort()\nprint(fruits)',
          exercises: [
            { type: 'choice', question: '想往列表加一个，用 fruits.___("西瓜")。', options: ['append', 'insert', 'add'], answer: 0, explain: 'append 在列表末尾加一个元素。' },
            { type: 'choice', question: 'fruits.sort() 会做什么？', options: ['打乱', '按大小/拼音排序', '删除'], answer: 1, explain: 'sort 会把列表排好顺序。' },
            { type: 'typing', question: '敲一敲列表操作词：', words: ['APPEND', 'SORT', 'SLICE'] },

      { type: 'coding', question: '列表 nums = [3,1,2]。先排序，再打印排序后的列表。', starter: 'nums = [3, 1, 2]\nnums.sort()\nprint(___)', expect: '[1, 2, 3]', hint: '排序后直接打印变量 nums。' },]
        },
        {
          id: 'c5l3',
          video: 'video/c5l3.mp4',
          videoCaption: '字典用名字查值，scores["语文"] 一下找到90分。',
          title: '字典：名字对应值',
          icon: '📒',
          markdown: '## 字典 = 名字 对应 一个值\n\n列表用编号找，字典用**名字**找：\n\n```\nscores = {"语文": 90, "数学": 95}\nprint(scores["语文"])\n```\n\n左边是"键"（名字），右边是"值"。凭名字就能查到值。',
          figures: [{ key: 'dict_map', caption: '📒 字典用名字（键）对应值，凭名字查' }],
          takeaway: '字典像真实的字典：一个名字对应一个意思，你报名字，它立马把对应的内容翻给你。',
          code: 'scores = {"语文": 90, "数学": 95}\nprint(scores["语文"])',
          exercises: [
            { type: 'choice', question: 'scores = {"数学": 95}，查数学写 scores[___]。', options: ['"数学"', '数学', 'math'], answer: 0, explain: '字典用键（名字）来取值，键要带引号。' },
            { type: 'choice', question: '字典和列表最大的不同？', options: ['字典用名字查，列表用编号', '完全一样', '字典不能存东西'], answer: 0, explain: '字典按键查，列表按编号查。' },
            { type: 'typing', question: '敲一敲字典的词：', words: ['DICT', 'KEY', 'VALUE'] },

      { type: 'coding', question: '字典 student = {\'name\':\'小明\',\'age\':8}。打印小明的年龄。', starter: 'student = {\'name\':\'小明\', \'age\':8}\nprint(___)', expect: '8', hint: '用 student[\'age\'] 取出年龄。' },]
        },
        {
          id: 'c5l4',
          video: 'video/c5l4.mp4',
          videoCaption: '元组固定不改、集合自动去重、二维列表像一张表格。',
          title: '元组、集合与二维列表',
          icon: '🧺',
          markdown: '## 更多装东西的容器\n\n- **元组** `(1,2,3)`：装好后**改不了**，适合固定数据\n- **集合** `{"苹果","香蕉"}`：**自动去重**，不排队\n- **二维列表**：列表里再套列表，像一张表格\n\n不同容器脾气不同，按需要选。',
          figures: [{ key: 'tuple_set', caption: '🧺 元组固定不改、集合去重、二维列表像表格' }],
          takeaway: '元组是一旦装好就改不了的盒子；集合专门帮你去掉重复；二维列表像一张表格，横竖都能排。',
          code: 'point = (3, 4)\nfruits = {"苹果", "苹果", "香蕉"}\ngrid = [[1, 2], [3, 4]]\nprint(fruits)',
          exercises: [
            { type: 'choice', question: '哪个容器会自动去掉重复？', options: ['列表', '集合', '元组'], answer: 1, explain: '集合里的重复元素会自动合并。' },
            { type: 'choice', question: '内容固定改不了的容器叫___。', options: ['元组', '列表', '集合'], answer: 0, explain: '元组用圆括号，创建后不能修改。' },
            { type: 'typing', question: '敲一敲容器的词：', words: ['TUPLE', 'SET', 'GRID'] },

      { type: 'coding', question: '二维列表 grid = [[1,2],[3,4]]。打印第二行。', starter: 'grid = [[1,2],[3,4]]\nprint(___)', expect: '[3, 4]', hint: 'grid[1] 是第二行（编号从 0 开始）。' },]
        },
        {
          id: 'c5l5',
          video: 'video/c5l5.mp4',
          videoCaption: '一行 [i for i in range(5)] 就造出一排格子，还能筛出偶数！',
          title: '列表推导式：一行造一排',
          icon: '⚡️',
          markdown: '## 一行就把一排格子造出来\n\n想造一个 `0,1,2,3,4` 的列表，以前要写循环。现在有一行魔法：\n\n```\nnums = [i for i in range(5)]\n```\n\n意思是"对 range(5) 里的每一个 i，都收进列表"。还能顺便筛选：\n\n```\nevns = [i for i in range(10) if i % 2 == 0]\n```\n\n只收"能被 2 整除"的，结果 `[0,2,4,6,8]`。\n\n> 列表推导式是 14 岁写 Python 的"提速神器"，又短又清楚。',
          figures: [{ key: 'list_comp', caption: '⚡️ 一行 [i for i in range] 就造出一排格子，还能筛选' }],
          takeaway: '有个偷懒神器：用一行 [x for x in ...] 就能造出整个列表，中间加个 if 还能挑出想要的，又快又帅。',
          code: 'nums = [i for i in range(5)]\nprint(nums)\nevns = [i for i in range(10) if i % 2 == 0]\nprint("偶数：", evns)',
          words: [],
          exercises: [
            { type: 'choice', question: '[i for i in range(3)] 会得到？', options: ['[0,1,2]', '[1,2,3]', '[0,1,2,3]'], answer: 0, explain: 'range(3) 是 0,1,2，收进列表就是 [0,1,2]。' },
            { type: 'choice', question: '想只收偶数，要加什么？', options: ['if i%2==0', 'for 两次', '什么都不加'], answer: 0, explain: '在推导式末尾加 if 条件就能筛选。' },
            { type: 'typing', question: '敲一敲推导式相关词：', words: ['DERIVE', 'INLINE', 'FILTER'] },

      { type: 'coding', question: '用列表推导式生成 1 到 5 的平方，存进变量 sq 并打印。', starter: 'sq = [i*i for i in range(1, 6)]\nprint(___)', expect: '[1, 4, 9, 16, 25]', hint: '打印变量 sq。' },]
        },
        {
          id: 's2',
          title: '🌟 进度二总结：逻辑小魔法师诞生！',
          icon: '🪄',
          kind: 'summary',
          progress: 2,
          award: { p: 2, title: '逻辑小魔法师', badge: '🪄', desc: '走完第二段：会让电脑画图、做判断、管理一整列数据。' },
          markdown: '## 🪄 进度二总结：你成了「逻辑小魔法师」！\n\n这一段你学会了让电脑又画又想又记：\n\n- 🐢 **海龟画图**：forward 前进、left/right 转弯，小海龟听你指挥画出图形。\n- 🔁 **用循环画图案**：重复的事交给 for，一圈漂亮的花就出来了。\n- ❓ **if 做决定**：电脑会判断“如果……就……”，该走哪条路它自己选。\n- 🔂 **循环跑起来**：for 数数、while 直到条件不满足，省下无数次复制粘贴。\n- 📋 **列表**：一堆东西排成队，想加就加、想改就改、想排序就排序。\n\n### 🚀 用学到的知识，你现在能做这些事\n- 画一朵 🌸 花 或一个 ⭐ 五角星（用循环转着画）。\n- 做一个猜数字小游戏（电脑想一个数，你猜，它用 if 告诉你大了还是小了）。\n- 管理一个 🛒 购物车清单（加东西、删东西、',
          takeaway: '这一段你简直像魔法师：会指挥小海龟画图、会让电脑做判断、还把列表管得服服帖帖。授予你 🪄 逻辑小魔法师！',
          encourage: {
            gentle: '宝贝太厉害了！你现在已经能让电脑“画”和“想”，这可是很多大人都觉得难的本事。点「完成本节」，🪄 逻辑小魔法师 勋章就戴在你身上了，下一段我们去把重复的事“打包”成函数！',
            humor: '好家伙，让电脑又画又想又记——这波操作连大人都得愣一下！点「完成本节」把 🪄 逻辑小魔法师 勋章收下。下一段更带劲：咱们把重复活“打包”成函数，偷懒专用！',
            strict: '画图画、做判断、管列表，这一段你都拿下了，像样。点「完成本节」，🪄 逻辑小魔法师 勋章记你一份。下一段学函数，把重复活打包好——别再一遍遍复制粘贴了。',
          },
          exercises: [
          { type: 'choice', question: '想让小海龟向前走、画出线，用哪个命令？', options: ['forward', 'left', 'print'], answer: 0, explain: 'forward 让小海龟前进并画线。' },
          { type: 'choice', question: '把同一件事重复很多次，用下面哪个最省力？', options: ['把代码复制很多遍', '用 for / while 循环', '每行都手敲'], answer: 1, explain: '循环就是“重复做”，省时又省心。' },
          { type: 'choice', question: '列表 pets = ["猫","狗","兔"]，想取第一个"猫"应该用？', options: ['pets[0]', 'pets[1]', 'pets[3]'], answer: 0, explain: '电脑从 0 开始数，第一个是 pets[0]。' },
          { type: 'tap', multi: true, question: '下面哪些是小海龟画图的命令？（对的都点出来）', options: ['forward（前进画线）', 'left（左转）', 'right（右转）', 'print（在屏幕打印字）'], answer: [0, 1, 2], explain: 'forward / left / right 都是海龟命令；print 是打印文字，不是海龟命令。' },
          { type: 'typing', question: '照着敲一敲这一段学过的关键词：', words: ['FORWARD', 'LEFT', 'RIGHT', 'LOOP', 'IF', 'LIST'] },
          { type: 'coding', question: '🐢 编程题 1：用 for 循环把“加油”打印 5 次。', starter: 'for i in range(5):\n    print("")', expect: '加油' },
          { type: 'coding', question: '🐢 编程题 2：列表 nums = [3, 1, 4, 2]，把它从小到大排好并打印。', starter: 'nums = [3, 1, 4, 2]\nnums.sort()\nprint()', expect: '[1, 2, 3, 4]' },
          { type: 'coding', question: '🐢 编程题 3：age = 10，如果 age 大于 8 就打印“你长大啦”，否则打印“你还小”。', starter: 'age = 10\nif age > 8:\n    print()\nelse:\n    print()', expect: '你长大啦' }
        ]
        }
      ]
    },
    {
      title: '第6章 函数与模块',
      lessons: [
        {
          id: 'c6l1',
          video: 'video/c6l1.mp4',
          videoCaption: '函数像加工机器：丢进原料a、b，吐出 a+b 的成品。',
          title: '自定义函数 def',
          icon: '🔧',
          markdown: '## 函数 = 一台加工机器\n\n同一件事要做很多次，打包成函数：\n\n```\ndef add(a, b):\n    return a + b\n```\n\n`def` 是"定义"，`a`、`b` 是**参数**，`return` 是吐出的成品。',
          figures: [{ key: 'function_machine', caption: '🔧 函数像机器：丢进原料（参数），吐出成品（return）' }],
          takeaway: 'def 就是造一台小机器：参数像进料口收原料，return 像出料口吐出做好的成品，下次直接喊它干活。',
          code: 'def add(a, b):\n    return a + b\nprint(add(3, 4))\nprint(add(10, 20))',
          exercises: [
            { type: 'choice', question: 'Python 里"定义函数"用哪个词？', options: ['def', 'define', 'func'], answer: 0, explain: 'def 用来定义一个函数。' },
            { type: 'choice', question: '下面哪个是"函数吐出的结果"？', options: ['def', 'return', 'print'], answer: 1, explain: 'return 把结果返回给调用的人。' },
            { type: 'typing', question: '敲一敲函数的词：', words: ['DEF', 'RETURN', 'FUNC'] },

      { type: 'coding', question: '写一个函数 greet(name)，打印：你好，name！ 然后调用 greet(\'小红\')。', starter: 'def greet(name):\n    print(\'你好，\' + name + \'！\')\n\n___', expect: '你好，小红！', hint: '在下面一行写 greet(\'小红\') 来调用它。' },]
        },
        {
          id: 'c6l2',
          video: 'video/c6l2.mp4',
          videoCaption: 'import 把 math、random 工具箱搬来，直接拿来用。',
          title: '模块：拿来就用的工具箱',
          icon: '📦',
          markdown: '## 模块 = 别人准备好的工具箱\n\n很多功能别人写好了，放在"模块"里，直接拿来用：\n\n```\nimport math\nprint(math.sqrt(16))\nimport random\nprint(random.randint(1, 6))\n```\n\n`import` 就是把工具箱搬过来。',
          figures: [{ key: 'function_machine', caption: '📦 模块像装满现成工具的工具箱，import 搬来就能用' }],
          takeaway: '不用啥都自己写，import 能把别人准备好的工具箱（像 math 算数、random 随机）直接搬来用，省事！',
          code: 'import math\nprint(math.sqrt(16))\nimport random\nprint("掷骰子：", random.randint(1, 6))',
          exercises: [
            { type: 'choice', question: '把工具箱搬来用，写___ math。', options: ['import', 'include', 'require'], answer: 0, explain: 'import 用来引入模块。' },
            { type: 'choice', question: '想掷随机骰子，用哪个模块？', options: ['math', 'random', 'turtle'], answer: 1, explain: 'random 模块能生成随机数。' },
            { type: 'typing', question: '敲一敲模块的词：', words: ['IMPORT', 'MATH', 'RANDOM'] },

      { type: 'coding', question: '用 math 模块的 sqrt 计算 16 的平方根并打印。', starter: 'import math\nprint(math.sqrt(16))', expect: '4.0', hint: 'import math 后，用 math.sqrt(数字) 求平方根。' },]
        },
        {
          id: 'c6l3',
          video: 'video/c6l3.mp4',
          videoCaption: '函数能设默认值，不填就用"小朋友"，填了就用你给的。',
          title: '函数的妙用',
          icon: '✨',
          markdown: '## 让函数更灵活\n\n函数可以有很多参数，还能给参数一个**默认值**：\n\n```\ndef greet(name="小朋友"):\n    print("你好，" + name)\ngreet()\ngreet("小光")\n```\n\n不传就用默认，传了就用你给的。',
          figures: [{ key: 'function_machine', caption: '✨ 函数可带多个参数和默认值，更灵活' }],
          takeaway: '函数能一次收好几个原料，还能给某些原料设个“默认口味”，你不填它就用默认的，贴心吧。',
          code: 'def greet(name="小朋友"):\n    print("你好，" + name)\ngreet()\ngreet("小光")',
          exercises: [
            { type: 'choice', question: 'def greet(name="小朋友") 里，"小朋友"是？', options: ['必填参数', '默认值', '函数名'], answer: 1, explain: '不传参数时就用这个默认值。' },
            { type: 'choice', question: '不写参数调用 greet()，会用___值。', options: ['默认', '标准', '固定'], answer: 0, explain: '没传参时启用默认值。' },
            { type: 'typing', question: '敲一敲函数相关的词：', words: ['PARAM', 'DEFAULT', 'GREET'] },

      { type: 'coding', question: '写一个函数 add(a,b) 返回 a+b，然后打印 add(3,5)。', starter: 'def add(a, b):\n    return a + b\nprint(___)', expect: '8', hint: '调用 add(3, 5) 并打印结果。' },]
        },
        {
          id: 'c6l4',
          video: 'video/c6l4.mp4',
          videoCaption: 'lambda 一行写完匿名小函数，不用起名字超方便。',
          title: 'lambda：不用起名的小函数',
          icon: '🕶',
          markdown: '## 一行写完的匿名函数\n\n普通函数要用 `def` 起个名字。有时只想临时用一下，可以用 **lambda** 一行写好：\n\n```\nsquare = lambda x: x * x\nprint(square(5))   # 25\n```\n\n`lambda x: x*x` 意思是"给我一个 x，还你 x 乘 x"，不用 def、不用起名。\n\n> lambda 是 14 岁进阶写法：把"小动作"当作值传来传去，写起来超快。',
          figures: [{ key: 'lambda_fun', caption: '🕶 lambda 一行定义匿名小函数，不用起名字' }],
          takeaway: 'lambda 是一次性小函数：一行写完、没名字，专门应付那种临时算一下的小活儿，用完就走。',
          code: 'square = lambda x: x * x\ndouble = lambda x: x + x\nprint("5的平方：", square(5))\nprint("3的两倍：", double(3))',
          words: [],
          exercises: [
            { type: 'choice', question: 'lambda x: x*x 收到 4 会返回？', options: ['4', '8', '16'], answer: 2, explain: 'x*x 是 4*4=16。' },
            { type: 'choice', question: 'lambda 和普通 def 函数最大的不同？', options: ['lambda 要起名字', 'lambda 一行写完、不用起名', '完全一样'], answer: 1, explain: 'lambda 是匿名、一行式的小函数。' },
            { type: 'typing', question: '敲一敲匿名函数相关词：', words: ['LAMBDA', 'ANONYMOUS', 'QUICK'] },

      { type: 'coding', question: '用 lambda 写一个“乘 2”的小函数 f，打印 f(10)。', starter: 'f = lambda x: x * 2\nprint(___)', expect: '20', hint: '调用 f(10) 并打印。' },]
        }
      ]
    },
    {
      title: '第7章 文件与异常',
      lessons: [
        {
          id: 'c7l1',
          video: 'video/c7l1.mp4',
          videoCaption: 'open 翻开小本本，写进去关掉程序内容还在。',
          title: '文件：电脑里的小本本',
          icon: '📒',
          markdown: '## 把东西记到本子里\n\n程序关掉变量就没了。想**长久保存**，真实电脑会写到文件：\n\n```\nwith open("note.txt", "w") as f:\n    f.write("今天学了 Python")\nwith open("note.txt") as f:\n    print(f.read())\n```\n\n`open` 打开本子，写进去、读出来，关掉程序内容还在。\n\n> 💡 在线沙盒暂不支持真正写文件，下面的小程序用「笔记本变量」演示「存→取」的效果，原理一样。',
          figures: [{ key: 'file_book', caption: '📒 文件像小本本，写进去关掉程序还在' }],
          takeaway: '用 open 能打开文件，把东西写进去存好，或者读出来用，这样关掉电脑内容也不丢。',
          code: 'notebook = "今天学了 Python"\nprint("我记下了：", notebook)\nprint("复习一下：", notebook)',
          exercises: [
            { type: 'choice', question: '想读写电脑里的小本本，用___。', options: ['open', 'file', 'read'], answer: 0, explain: 'open 用来打开文件。' },
            { type: 'choice', question: '写进文件后，关掉程序内容会？', options: ['消失', '还在', '变成乱码'], answer: 1, explain: '文件保存在硬盘，关程序也在。' },
            { type: 'typing', question: '敲一敲文件操作的词：', words: ['OPEN', 'WRITE', 'READ'] },

      { type: 'coding', question: '我们不真写文件，而是用字符串模拟“一行笔记”。把三行笔记拼成一个字符串（用 \\n 换行），打印出来。', starter: 'note = \'学 Python\\n每天进步\\n坚持下去\'\nprint(___)', expect: '学 Python\n每天进步\n坚持下去', hint: '直接打印变量 note。' },]
        },
        {
          id: 'c7l2',
          video: 'video/c7l2.mp4',
          videoCaption: 'try 试一试、except 接住摔跤，程序温柔不崩溃。',
          title: '异常：程序摔跤了怎么办',
          icon: '🛡',
          markdown: '## 温柔接住错误\n\n程序有时会出错（比如除以 0）。用 `try` 试一试，`except` 接住它：\n\n```\ntry:\n    print(1 / 0)\nexcept:\n    print("出错啦，但程序继续跑")\n```\n\n这样程序**不会崩**，温柔地跳过错误继续走。',
          figures: [{ key: 'try_except', caption: '🛡 try 试一试，except 接住摔跤，程序不崩' }],
          takeaway: 'try-except 像安全网：把可能出错的代码包起来，真摔了也能接住，程序不崩溃，继续跑。',
          code: 'try:\n    print(1 / 0)\nexcept:\n    print("出错啦，但程序继续跑")',
          exercises: [
            { type: 'choice', question: '"接住错误"用___。', options: ['except', 'catch', 'try'], answer: 0, explain: 'except 捕获并处理异常。' },
            { type: 'choice', question: '没有 try-except 时出错会怎样？', options: ['程序自动修好', '程序崩掉停下', '什么也不发生'], answer: 1, explain: '没处理异常，程序会报错停止。' },
            { type: 'typing', question: '敲一敲异常处理的词：', words: ['TRY', 'EXCEPT', 'CATCH'] },

      { type: 'coding', question: '用 try/except 包住一段会出错的代码（比如 1/0），出错时打印：出错了，但我没事。', starter: 'try:\n    print(1 / 0)\nexcept:\n    print(\'出错了，但我没事\')', expect: '出错了，但我没事', hint: 'except 会接住错误，程序不会崩。' },]
        },
        {
          id: 'c7l3',
          video: 'video/c7l3.mp4',
          videoCaption: 'JSON 像通用便签条，把数据存成文字在程序间传来传去。',
          title: 'JSON：电脑的便签条',
          icon: '🗒',
          markdown: '## 把数据写成电脑都懂的格式\n\n真实世界的数据（成绩单、设置项）常常用 **JSON** 这种"便签条"格式存：\n\n```\n{\n  "name": "Xiaoguang",\n  "age": 7,\n  "hobbies": ["draw", "code"]\n}\n```\n\n它长得像字典，但能直接存进文件、发给别的程序。Python 里：\n- `json.dumps(数据)`：把数据变成 JSON 文字\n- `json.loads(文字)`：把 JSON 文字变回数据\n\n> JSON 是现在 APP、网站之间交换数据的"通用语言"，14 岁必会。',
          figures: [{ key: 'json_note', caption: '🗒 JSON 像便签条：名字对应值，电脑之间通用' }],
          takeaway: 'JSON 是电脑之间通用的“数据便签”，整齐又好认；用 json.dumps 打包、json.loads 拆开，来回转换超方便。',
          code: 'import json\nd = {"name": "Xiaoguang", "age": 7}\ntxt = json.dumps(d)\nprint("存成便签:", txt)\nback = json.loads(txt)\nprint("读回来:", back["name"])',
          words: [],
          exercises: [
            { type: 'choice', question: 'JSON 主要用来做什么？', options: ['让电脑算数', '在不同程序间交换数据', '画海龟'], answer: 1, explain: 'JSON 是程序之间通用的数据格式。' },
            { type: 'choice', question: '把数据变成 JSON 文字，用？', options: ['json.loads', 'json.dumps', 'json.open'], answer: 1, explain: 'dumps 把数据"倒"成 JSON 字符串。' },
            { type: 'typing', question: '敲一敲数据格式相关词：', words: ['JSON', 'DUMP', 'LOAD'] },

      { type: 'coding', question: '电脑的便签条（JSON）就是用「名字:值」记信息。用字典做一张便签条 note = {\'name\':\'小明\',\'age\':8}，再打印小明的年龄。', starter: 'note = {\'name\':\'小明\', \'age\':8}\nprint(___)', expect: '8', hint: '用 note[\'age\'] 取出年龄。' },]
        }
      ]
    },
    {
      title: '第8章 算法启蒙',
      lessons: [
        {
          id: 'c8l1',
          video: 'video/c8l1.mp4',
          videoCaption: '二分查找每次砍掉一半，几下就找到目标，超快！',
          title: '查找：怎么快速找到它',
          icon: '🔍',
          markdown: '## 一个一个找，还是砍一半找？\n\n- **顺序查找**：从第一个看到最后一个\n- **二分查找**：先找中间，比大小砍掉一半，再找中间……几下就找到\n\n> 二分查找像翻字典，每次砍掉一半，超快！',
          figures: [{ key: 'binary_search', caption: '🔍 二分查找每次砍掉一半，几下就找到' }],
          takeaway: '找东西有窍门：一个个看叫顺序查找；二分查找更聪明，每次从中间劈一半，越砍越快。',
          code: 'nums = [1, 3, 5, 7, 9]\nfor n in nums:\n    if n == 7:\n        print("找到 7 啦")\nprint("二分：每次砍掉一半，几下就找到")',
          exercises: [
            { type: 'choice', question: '从第一个看到最后一个，叫___查找。', options: ['顺序', '二分', '随机'], answer: 0, explain: '顺序查找逐个比对。' },
            { type: 'choice', question: '二分查找为什么快？', options: ['它运气好', '每次砍掉一半', '它不比较'], answer: 1, explain: '每次排除一半，范围迅速缩小。' },
            { type: 'typing', question: '敲一敲查找的词：', words: ['FIND', 'SEARCH', 'HALF'] },

      { type: 'coding', question: '列表 nums = [5,3,8,1]。用 in 判断 8 在不在这列里，打印结果（True 或 False）。', starter: 'nums = [5,3,8,1]\nprint(8 in nums)', expect: 'True', hint: 'in 可以检查一个东西是否在一组里。' },]
        },
        {
          id: 'c8l2',
          video: 'video/c8l2.mp4',
          videoCaption: '冒泡排序相邻比一比，大的往上浮，最后排得整整齐齐。',
          title: '排序：让队伍排整齐',
          icon: '📊',
          markdown: '## 把乱糟糟变整齐\n\n**冒泡排序**：相邻两个比一比，大的往后浮，一遍遍下来就排好了。\n\nPython 里更简单：\n\n```\na = [5, 2, 8, 1]\na.sort()\nprint(a)\n```',
          figures: [{ key: 'bubble_sort', caption: '📊 冒泡排序：相邻比一比，大的往上浮，最后排整齐' }],
          takeaway: '排序就是把乱糟糟的数据排整齐；冒泡排序像气泡往上浮，挨个比一比，大的往后挪。',
          code: 'a = [5, 2, 8, 1]\na.sort()\nprint(a)',
          exercises: [
            { type: 'choice', question: '想给列表排好顺序，用 a.___()。', options: ['sort', 'order', 'arrange'], answer: 0, explain: 'sort 方法会把列表排好。' },
            { type: 'choice', question: '冒泡排序是怎么排的？', options: ['随机乱排', '相邻比一比大的往后浮', '只排第一个'], answer: 1, explain: '冒泡排序通过相邻比较把大的逐步往后移。' },
            { type: 'typing', question: '敲一敲排序的词：', words: ['SORT', 'BUBBLE', 'ORDER'] },

      { type: 'coding', question: '列表 a = [4,2,7,1]。打印排好序的结果（用 sorted）。', starter: 'a = [4, 2, 7, 1]\nprint(___)', expect: '[1, 2, 4, 7]', hint: 'sorted(列表) 会返回排好序的新列表。' },]
        },
        {
          id: 's3',
          title: '🌟 进度三总结：你是函数小工程师！',
          icon: '🔧',
          kind: 'summary',
          progress: 3,
          award: { p: 3, title: '函数小工程师', badge: '🔧', desc: '走完第三段：会写函数打包重复工作、读写文件、不怕出错。' },
          markdown: '## 🔧 进度三总结：你晋级「函数小工程师」！\n\n这一段你把“力气活”交给了电脑，自己当起了工程师：\n\n- 🧩 **写函数**：def 把一段活打包，想用就调用，不用一遍遍重写。\n- 🎚 **参数与返回值**：函数能收“原料”、吐出“成品”，还能设默认口味。\n- ⚡ **lambda**：一行写完的小函数，临时用一下超方便。\n- 📚 **模块**：别人写好的工具箱，import 一下就能用。\n- 💾 **文件**：让程序把东西写进文件、再从文件读出来，关掉也不丢。\n- 🛡 **异常**：try / except 给程序穿盔甲，出错了也不崩。\n- 🧠 **算法启蒙**：排序、查找、用更聪明的办法省时间。\n\n### 🚀 用学到的知识，你现在能做这些事\n- 写一个 🗂 自动整理桌面 的小脚本（把文件按类型分进文件夹）。\n- 做一个 💰 记账本（记一笔、存进文件、随时翻出来看）。\n- 把一首喜欢的诗存进文件再读出来，',
          takeaway: '这一段你升级成工程师啦：会写函数、会存文件、还懂了查找排序的小算法。授予 🔧 函数小工程师！',
          encourage: {
            gentle: '宝贝，你真的长大了！现在你写的不是零散命令，而是一台台“小机器”。点「完成本节」，🔧 函数小工程师 勋章就归你啦，最后一段——我们去做真正的小项目、碰一碰 AI！',
            humor: '可以啊你，现在写的不是零散命令，是一台台“小机器”了！点「完成本节」领走 🔧 函数小工程师 勋章。最后一段最刺激：做真项目、还碰一碰 AI，准备好没？',
            strict: '函数、文件、异常、算法，这一段你都接住了，有工程师的样子了。点「完成本节」，🔧 函数小工程师 勋章记你一份。最后一段做真项目、碰 AI——别只会玩具例子，拿出来真东西。',
          },
          exercises: [
          { type: 'choice', question: '自己写一个函数，要用哪个关键字开头？', options: ['def', 'return', 'import'], answer: 0, explain: 'def 用来定义（definition）一个函数。' },
          { type: 'choice', question: '函数算完结果，要把结果“交出来”用哪个关键字？', options: ['return', 'print', 'break'], answer: 0, explain: 'return 把结果交回给调用的人。' },
          { type: 'choice', question: '想用别人写好的工具箱（比如 random），用哪句？', options: ['include', 'import', 'use'], answer: 1, explain: 'import 把模块（工具箱）拿来用。' },
          { type: 'tap', multi: true, question: '下面哪些是关于函数的正确说法？（对的都点出来）', options: ['def 用来定义函数', '函数可以接收参数', '函数用 return 把结果交出来', '函数里不能有任何计算'], answer: [0, 1, 2], explain: 'def 定义、可收参数、用 return 交结果，都是对的；函数里当然能计算。' },
          { type: 'typing', question: '照着敲一敲这一段学过的关键词：', words: ['DEF', 'RETURN', 'IMPORT', 'FUNCTION', 'MODULE', 'FILE'] },
          { type: 'coding', question: '🔧 编程题 1：写一个函数 add(a, b) 返回 a + b，再调用 add(6, 9) 并打印结果。', starter: 'def add(a, b):\n    return a + b\nprint()', expect: '15' },
          { type: 'coding', question: '🔧 编程题 2：用 for 和 if，把 1 到 10 里的偶数（2,4,6,8,10）加起来，打印总和。', starter: 'total = 0\nfor i in range(1, 11):\n    if i % 2 == 0:\n        total = total + i\nprint()', expect: '30' },
          { type: 'coding', question: '🔧 编程题 3：列表 nums = [5, 2, 8, 1]，用 min() 找出最小的那个数并打印。', starter: 'nums = [5, 2, 8, 1]\nprint()', expect: '1' }
        ]
        }
      ]
    },
    {
      title: '第9章 项目与递归',
      lessons: [
        {
          id: 'c9l1',
          video: 'video/c9l1.mp4',
          videoCaption: '猜数字游戏把变量、随机、循环、判断串起来，真好玩！',
          title: '综合小项目：猜数字',
          icon: '🎯',
          markdown: '## 把学过的用起来！\n\n做个小游戏：电脑想一个 1–10 的数，你来猜，它告诉你"大了 / 小了"，直到猜中。\n\n```\nimport random\nanswer = random.randint(1, 10)\nprint("我想了 1 到 10 的数，猜猜看！")\n```\n\n真实游戏里用 `input()` 让小朋友输入；下面用几个例子演示"比大小"的判断逻辑。这里用到了**变量、随机模块、循环、判断**——都是前面学的！',
          figures: [{ key: 'function_machine', caption: '🎯 综合项目：把变量、随机、循环、判断串起来做小游戏' }],
          takeaway: '这节最带劲！把变量、随机、循环、判断全串起来，真做出一个能玩的猜数字小游戏，你已经是小游戏作者啦！',
          code: 'import random\nanswer = random.randint(1, 10)\nprint("我想了 1 到 10 的数，猜猜看！")\nguesses = [5, 8, 3, answer]   # 模拟你猜的几次\nfor g in guesses:\n    if g == answer:\n        print(g, "→ 猜中啦🎉")\n    elif g > answer:\n        print(g, "→ 太大了")\n    else:\n        print(g, "→ 太小了")',
          exercises: [
            { type: 'choice', question: '这个猜数字游戏用到了什么？', options: ['只有打印', '变量+随机+循环+判断', '只有循环'], answer: 1, explain: '综合运用了变量、random 模块、循环和判断。' },
            { type: 'choice', question: 'random.randint(1, 10) 生成___到___的随机整数。', options: ['1 到 10', '1 到 9', '0 到 10'], answer: 0, explain: 'randint(a,b) 生成 a 到 b 之间的随机整数。' },
            { type: 'typing', question: '敲一敲项目的词：', words: ['GAME', 'GUESS', 'RANDOM'] },

      { type: 'coding', question: '写一个函数 is_big(n)，如果 n 大于 50 打印“大”，否则打印“小”。调用 is_big(80)。', starter: 'def is_big(n):\n    if n > 50:\n        print(\'大\')\n    else:\n        print(\'小\')\n\n___', expect: '大', hint: '在下面调用 is_big(80)。' },]
        },
        {
          id: 'c9l2',
          video: 'video/c9l2.mp4',
          videoCaption: '递归像镜子里的镜子，函数自己调用自己，层层缩小到最小。',
          title: '递归：自己调用自己',
          icon: '🪞',
          markdown: '## 函数里还能叫自己？\n\n**递归**就是函数自己调用自己，每次把问题缩小一点，到最小就停：\n\n```\ndef count(n):\n    if n == 0:\n        return\n    print(n)\n    count(n - 1)\ncount(3)\n```\n\n> 像镜子里的镜子，一层层变小，到最小那层就结束。',
          figures: [{ key: 'recursion', caption: '🪞 递归：函数自己调用自己，层层缩小到最小就停' }],
          takeaway: '递归有点绕但很妙：函数自己叫自己，每叫一次就把问题缩小一点，缩到最小就停，像套娃。',
          code: 'def count(n):\n    if n == 0:\n        return\n    print(n)\n    count(n - 1)\ncount(3)',
          exercises: [
            { type: 'choice', question: '函数自己调用自己，这种写法叫___。', options: ['递归', '循环', '重复'], answer: 0, explain: '递归 = 函数调用自身。' },
            { type: 'choice', question: '递归为什么不会永远停？', options: ['它很乖', '有个最小情况让它停下', '电脑强制停'], answer: 1, explain: '递归必须有一个终止条件。' },
            { type: 'typing', question: '敲一敲递归的词：', words: ['RECURSE', 'SELF', 'MIRROR'] },

      { type: 'coding', question: '用递归写函数 fact(n) 算阶乘，打印 fact(4)。（fact(1)=1，fact(n)=n*fact(n-1)）', starter: 'def fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\nprint(___)', expect: '24', hint: '调用 fact(4) 并打印。' },]
        }
      ]
    },
    {
      title: '第10章 对象与游戏',
      lessons: [
        {
          id: 'c10l1',
          video: 'video/c10l1.mp4',
          videoCaption: '类像蓝图，照它造出很多只具体的猫（对象）。',
          title: '类与对象',
          icon: '🐱',
          markdown: '## 类 = 蓝图，对象 = 照蓝图造的实物\n\n先画一张"猫"的蓝图（类），再照它造出具体的猫（对象）：\n\n```\nclass Cat:\n    def __init__(self, name):\n        self.name = name\n    def meow(self):\n        print(self.name + "：喵")\nm = Cat("咪咪")\nm.meow()\n```\n\n一张蓝图能造很多只猫，每只都有自己的名字。',
          figures: [{ key: 'class_blueprint', caption: '🐱 类像蓝图，照它造出很多只具体的猫（对象）' }],
          takeaway: '类像一张蓝图，对象就是照着蓝图造出来的真东西；比如“狗”是类，你家旺财就是一条对象。',
          code: 'class Cat:\n    def __init__(self, name):\n        self.name = name\n    def meow(self):\n        print(self.name + "：喵")\nm = Cat("咪咪")\nm.meow()',
          exercises: [
            { type: 'choice', question: 'class Cat 里的 Cat 是一个___（蓝图）。', options: ['类', '对象', '函数'], answer: 0, explain: 'class 用来定义类（蓝图）。' },
            { type: 'choice', question: 'm = Cat("咪咪") 里的 m 是？', options: ['类', '对象（实例）', '函数'], answer: 1, explain: 'm 是照 Cat 类造出来的具体对象。' },
            { type: 'typing', question: '敲一敲对象的词：', words: ['CLASS', 'OBJECT', 'CAT'] },

      { type: 'coding', question: '定义一个类 Dog，有属性 name；方法 bark 打印：name 汪汪！ 创建小狗旺财并让它叫。', starter: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        print(self.name + \' 汪汪！\')\n\nw = Dog(\'旺财\')\n___', expect: '旺财 汪汪！', hint: '调用 w.bark()。' },]
        },
        {
          id: 'c10l2',
          video: 'video/c10l2.mp4',
          videoCaption: 'tkinter 让程序长出窗口，点按钮就能玩游戏得分。',
          title: '做自己的小游戏窗口',
          icon: '🎮',
          markdown: '## 让程序长出窗口\n\n用 `tkinter` 能做带按钮的小窗口游戏（在电脑上运行）：\n\n```\nimport tkinter as tk\nroot = tk.Tk()\nroot.title("我的小游戏")\nlabel = tk.Label(root, text="点我得分！")\nlabel.pack()\nroot.mainloop()\n```\n\n> 先看看代码逻辑；真正点按钮加分，等你在电脑上跑起来更酷！',
          figures: [{ key: 'class_blueprint', caption: '🎮 用 tkinter 做小窗口游戏，先理解代码逻辑' }],
          takeaway: 'tkinter 能画出带按钮窗口的小游戏！这节先搞懂它的代码逻辑，下回就能自己拼界面啦。',
          code: 'score = 0\nprint("游戏开始！答对一题 +1 分")\nscore = score + 1\nprint("现在得分：", score)',
          exercises: [
            { type: 'choice', question: '做窗口小游戏常用哪个模块？', options: ['tkinter', 'math', 'random'], answer: 0, explain: 'tkinter 是 Python 自带的图形界面模块。' },
            { type: 'choice', question: '游戏里记录分数，常用一个___变量。', options: ['score', 'point', 'mark'], answer: 0, explain: 'score 通常用来保存分数。' },
            { type: 'typing', question: '敲一敲游戏相关的词：', words: ['GAME', 'WINDOW', 'SCORE'] },

      { type: 'coding', question: '用纯 Python 模拟一次“游戏回合”：变量 hp=100，受到伤害 30，打印剩下的 hp。', starter: 'hp = 100\nhp = hp - 30\nprint(___)', expect: '70', hint: '打印变量 hp。' },]
        },
        {
          id: 'c10l3',
          video: 'video/c10l3.mp4',
          videoCaption: '子类继承父类本领，还能自己加新功能，像改出新蓝图。',
          title: '继承：照蓝图改出新蓝图',
          icon: '🧬',
          markdown: '## 子类：在旧蓝图基础上加新本领\n\n第10章你学过 `class` 造猫。如果还想造"会抓老鼠的猫"，不用从头画，可以**继承**旧的：\n\n```\nclass Cat:\n    def __init__(self, name):\n        self.name = name\nclass Hunter(Cat):\n    def catch(self):\n        print(self.name + " 抓到老鼠啦")\nm = Hunter("咪咪")\nm.catch()\n```\n\n`Hunter(Cat)` 表示"猎猫是猫的一种"，白送了 Cat 的所有本领，还能自己加新的。\n\n> 继承是面向对象的核心：复用旧代码、扩展新功能，14 岁一定要懂。',
          figures: [{ key: 'inherit_tree', caption: '🧬 子类继承父类的本领，还能自己加新的' }],
          takeaway: '子类能继承父类已有的本领，还能自己加新花样，就像孩子天生会爸妈的本事，再学点自己的。',
          code: 'class Cat:\n    def __init__(self, name):\n        self.name = name\nclass Hunter(Cat):\n    def catch(self):\n        print(self.name + " 抓到老鼠啦")\nm = Hunter("咪咪")\nm.catch()',
          words: [],
          exercises: [
            { type: 'choice', question: 'class Hunter(Cat) 里，Hunter 是？', options: ['父类', '子类（继承Cat）', '函数'], answer: 1, explain: '括号里的 Cat 是父类，Hunter 是继承它的子类。' },
            { type: 'choice', question: '继承最大的好处？', options: ['代码更长', '白送父类本领还能扩展', '什么都得重写'], answer: 1, explain: '子类自动拥有父类的能力，再添加自己的新功能。' },
            { type: 'typing', question: '敲一敲继承相关词：', words: ['INHERIT', 'PARENT', 'CHILD'] },

      { type: 'coding', question: '类 Cat 继承 Animal（Animal 有方法 eat 打印“吃东西”）。让小猫调用 eat。', starter: 'class Animal:\n    def eat(self):\n        print(\'吃东西\')\nclass Cat(Animal):\n    pass\nc = Cat()\n___', expect: '吃东西', hint: '调用 c.eat()。' },]
        }
      ]
    },
    {
      title: '第11章 数据与AI',
      lessons: [
        {
          id: 'c11l1',
          video: 'video/c11l1.mp4',
          videoCaption: '把数字画成小柱子，规律一眼看到；AI 从数据里学本领。',
          title: '画图与 AI 初探',
          icon: '📈',
          markdown: '## 把数字画成图，让规律看得见\n\n数据光看数字很累，画成图就清楚了：\n\n```\n数据 = [4, 7, 5, 9]\nfor i, d in enumerate(数据):\n    print("第" + str(i+1) + "天 " + "█" * d)\n```\n\n数数的时候，`enumerate` 能一边给**序号**一边给**内容**：`i` 是序号、`d` 是内容，一次拿到两个，特别方便。这就是**数据可视化**的雏形。\n\n而 **AI** 是让电脑从大量数据里自己学出规律——你以后会越学越明白！',
          figures: [{ key: 'bar_chart', caption: '📈 把数字画成图，规律一看就懂；AI 是从数据里学规律' }],
          takeaway: '把数字画成图，规律一眼就看出来；AI 呢，就是让电脑自己从一堆数据里学本领，越来越聪明。',
          code: 'data = [4, 7, 5, 9]\nfor i, d in enumerate(data):\n    print("第" + str(i+1) + "天 " + "█" * d)',
          exercises: [
            { type: 'choice', question: '把数字画成图来看，叫数据___。', options: ['可视化', '图表', '数据'], answer: 0, explain: '数据可视化让规律更直观。' },
            { type: 'choice', question: 'AI（人工智能）主要是做什么？', options: ['让电脑从数据学规律', '让电脑变重', '让电脑关机'], answer: 0, explain: 'AI 是从数据中学习规律的能力。' },
            { type: 'typing', question: '敲一敲数据相关的词：', words: ['CHART', 'DATA', 'AI'] },
            { type: 'choice', question: 'enumerate(数据) 一次能拿到什么？', options: ['只有内容', '序号和内容两个', '只有序号'], answer: 1, explain: 'enumerate 同时给出序号 i 和内容 d。' },

      { type: 'coding', question: '用纯 Python 模拟“AI 预测”：列表 scores=[0.1,0.8,0.3]，打印最大值的下标。', starter: 'scores = [0.1, 0.8, 0.3]\nprint(scores.index(___))', expect: '1', hint: '找 0.8 的下标：scores.index(0.8)。' },]
        }
      ]
    },
    {
      title: '第12章 嵌套循环',
      lessons: [
        {
          id: 'c12l2',
          video: 'video/c12l2.mp4',
          videoCaption: '外层管行、内层管星，嵌套循环打印出三角形图案。',
          title: '嵌套循环：打印图案',
          icon: '🔺',
          markdown: '## 循环里套循环\n\n想打印一个星星三角形？一行一行地打印，每一行又重复打印几颗星——这就是**嵌套循环**（循环里面还有循环）。外层管"有几行"，内层管"这一行几颗星"。',
          figures: [{ key: 'loop_pattern', caption: '🔺 外层管行、内层管星，嵌套循环打印出图案' }],
          takeaway: '循环里再套一个循环，叫嵌套循环；用它就能一行行打印出三角形那样的图案，像叠积木。',
          code: 'for i in range(1, 5):\n    line = ""\n    for j in range(i):\n        line = line + "⭐"\n    print(line)',
          exercises: [
            { type: 'choice', question: '循环里面再放一个循环，叫___循环。', options: ['嵌套', '重复', '循环'], answer: 0, explain: '嵌套 = 一层套一层。' },
            { type: 'choice', question: '想打印 5 行星星，外面那层循环一般控制什么？', options: ['行数', '星星的颜色', '电脑音量'], answer: 0, explain: '外层循环控制有几行。' },
            { type: 'typing', question: '敲一敲循环相关的词：', words: ['RANGE', 'NEST', 'LOOP'] },

      { type: 'coding', question: '用嵌套循环打印一个 4 行、每行 4 个 # 的方块。', starter: 'for r in range(4):\n    for c in range(4):\n        print("#", end="")\n    print()', expect: '####\n####\n####\n####', hint: '内层画一行 #，外层负责换行。' },]
        }
      ]
    },
    {
      title: '第13章 趣味小项目',
      lessons: [
        {
          id: 'c13l2',
          video: 'video/c13l2.mp4',
          videoCaption: '外层管行、内层管列，嵌套循环一口气打印出乘法表。',
          title: '小项目：九九乘法表',
          icon: '✖️',
          markdown: '## 打印乘法表\n\n用**嵌套循环**：外层控制"第几行(几的乘法)"，内层控制"乘到几"。一行一行打印出来，就是乘法表！',
          figures: [{ key: 'for_count', caption: '✖️ 外层管行、内层管列，嵌套循环打印出乘法表' }],
          takeaway: '还是嵌套循环的功劳：让它横着竖着一起跑，电脑唰一下就把整张乘法表打印出来，自己抄多累呀。',
          code: 'for i in range(1, 4):\n    line = ""\n    for j in range(1, 4):\n        line = line + str(i) + "×" + str(j) + "=" + str(i*j) + "  "\n    print(line)',
          exercises: [
            { type: 'choice', question: '打印乘法表，外层循环一般控制___。', options: ['行数（第几行）', '列数', '次数'], answer: 0, explain: '外层决定当前是第几行的乘法。' },
            { type: 'choice', question: '下面哪段能打印出"1×1=1"？', options: ['print(1×1)', 'print(str(1)+"×"+str(1)+"="+str(1))', 'print(1 1)'], answer: 1, explain: '用字符串拼出算式再打印。' },
            { type: 'typing', question: '敲一敲项目相关的词：', words: ['TIMES', 'TABLE', 'NEST'] },

      { type: 'coding', question: '用循环打印 1 到 9 各自乘 2 的结果，每行一个。', starter: 'for i in range(1, 10):\n    print(i, "*2 =", i * 2)', expect: '9 *2 = 18', hint: 'range(1,10) 会跑 1 到 9。' },]
        },
        {
          id: 'c13l3',
          video: 'video/c13l3.mp4',
          videoCaption: '把加法写成函数，想算就调用，干净又省力。',
          title: '小项目：我的计算器',
          icon: '🧮',
          markdown: '## 我的计算器\n\n把"算加法"做成一个**函数**，以后想算就调用它，不用重复写。函数像一台小机器：丢进去两个数，吐出结果。',
          figures: [{ key: 'function_machine', caption: '🧮 函数像小机器：丢进两个数，吐出计算结果' }],
          takeaway: '把算账的本事写成函数，想用的时候喊一声就行，代码干干净净，还不费力气。',
          code: 'def add(a, b):\n    return a + b\ndef sub(a, b):\n    return a - b\nprint("3+4=", add(3,4))\nprint("9-5=", sub(9,5))',
          exercises: [
            { type: 'choice', question: '在 Python 里定义一个函数，开头用___关键字。', options: ['def', 'define', 'func'], answer: 0, explain: 'def 用来定义函数。' },
            { type: 'choice', question: '`return a + b` 的作用是？', options: ['什么都不做', '把结果送回给调用的人', '把电脑关掉'], answer: 1, explain: 'return 把函数的计算结果返回。' },
            { type: 'typing', question: '敲一敲函数相关的词：', words: ['DEF', 'RETURN', 'ADD'] },

      { type: 'coding', question: '写函数 calc(a,b,op)：op 是 \'+\' 就返回 a+b，是 \'-\' 就返回 a-b。打印 calc(10, 4, \'+\')。', starter: 'def calc(a, b, op):\n    if op == \'+\':\n        return a + b\n    else:\n        return a - b\nprint(___)', expect: '14', hint: '调用 calc(10, 4, \'+\')。' },]
        },
        {
          id: 'c13l4',
          video: 'video/c13l4.mp4',
          videoCaption: '列表存单词、循环逐个念，做了一个自己的单词本。',
          title: '小项目：我的单词本',
          icon: '📒',
          markdown: '## 我的单词本\n\n把要背的单词放进**列表**，用循环一个一个念出来；还能用 `len()` 数一数一共记了多少个。这就是你的专属单词本！',
          figures: [{ key: 'list_grid', caption: '📒 列表存单词、循环逐个念，做了一个自己的单词本' }],
          takeaway: '用列表把单词都装起来，再用循环一个一个念出来，你就拥有了一本自己做的单词本！',
          code: 'words = ["apple","cat","dog","sun"]\nprint("我要背", len(words), "个单词：")\nfor w in words:\n    print("🔤 " + w)\nprint("背完啦，真棒！")',
          exercises: [
            { type: 'choice', question: '想知道列表里有几个单词，用___函数。', options: ['len', 'length', 'size'], answer: 0, explain: 'len 返回列表长度。' },
            { type: 'choice', question: '`for w in words:` 里的 w 每次代表？', options: ['整个列表', '列表里的每一个单词', '一个数字'], answer: 1, explain: '循环会依次把每个元素放进 w。' },
            { type: 'typing', question: '敲一敲单词本相关的词：', words: ['WORDS', 'LIST', 'LOOP'] },

      { type: 'coding', question: '用字典做单词本：wb = {\'apple\':\'苹果\',\'cat\':\'猫\'}。打印 cat 的意思。', starter: 'wb = {\'apple\':\'苹果\', \'cat\':\'猫\'}\nprint(___)', expect: '猫', hint: '用 wb[\'cat\'] 查出意思。' },]
        },
        {
          id: 's4',
          title: '🌟 进度四总结：Python 小创客出场！',
          icon: '🚀',
          kind: 'summary',
          progress: 4,
          award: { p: 4, title: 'Python小创客', badge: '🚀', desc: '走完第四段：会做小项目、懂对象与游戏、碰过数据与AI。' },
          markdown: '## 🚀 进度四总结：你是「Python 小创客」啦！\n\n这是最难也最酷的一段，你真的闯过来了：\n\n- 🔁 **递归**：函数自己调用自己，像俄罗斯套娃一样把大问题拆小。\n- 🎮 **对象与游戏**：用「类」造出会自己动的小角色，做成打字小游戏。\n- 📊 **数据与 AI**：用列表统计、做一点点会“学习”的小预测。\n- 🔢 **嵌套循环**：一层套一层，画出棋盘、表格那样的二维世界。\n- 🛠 **趣味小项目**：计算器、单词本……你已经开始“造东西”了！\n\n### 🚀 用学到的知识，你现在能做这些事\n- 做一个 ⌨️ 打字挑战小游戏（计时、计准确率为自己打分）。\n- 做一个 📈 成绩统计器（算平均分、找最高分）。\n- 写一个 ❤️ 猜你喜欢 的小程序（记你点过的东西，',
          takeaway: '这一段你已经是创客了：做出了小项目、弄懂了对象和游戏、还摸了摸 AI。授予 🚀 Python小创客！',
          encourage: {
            gentle: '宝贝，天哪你太强了！从“什么是程序”到能写小游戏，你只用了这一路。点「完成本节」戴上 🚀 Python 小创客 勋章，去毕业典礼看看——学完究竟能去哪儿！',
            humor: '天哪，从“什么是程序”到能写小游戏，你这一路也太猛了！点「完成本节」把 🚀 Python 小创客 勋章揣兜里，直奔毕业典礼——看看学完到底能去哪儿浪！',
            strict: '最难也最酷的一段，你闯过来了：递归、对象、数据、项目，都碰了。点「完成本节」，🚀 Python 小创客 勋章记你一份。去毕业典礼吧，看看你这身本事能去哪儿使。',
          },
          exercises: [
          { type: 'choice', question: '让函数自己调用自己、把大问题拆小，这种本领叫？', options: ['递归', '循环', '排序'], answer: 0, explain: '递归 = 函数调用自己，像套娃一样拆问题。' },
          { type: 'choice', question: '用 class 造出的“会自己动的小角色”，在 Python 里叫什么？', options: ['对象', '函数', '列表'], answer: 0, explain: 'class 是模具，造出来的一个个小角色叫对象（实例）。' },
          { type: 'choice', question: '想统计一班同学的平均分，最先用到的数据容器是？', options: ['列表', '注释', '密码'], answer: 0, explain: '把一堆分数放进列表，再算总和除以个数就是平均分。' },
          { type: 'tap', multi: true, question: '做自己的小项目（计算器、单词本…）时，下面哪些本领都用得上？（对的都点出来）', options: ['用函数把功能打包', '用列表存一堆数据', '用 class 造会动的小角色', '用嵌套循环画棋盘那样的东西'], answer: [0, 1, 2, 3], explain: '函数打包、列表存数据、class 造角色、嵌套循环画图——做项目全用得上。' },
          { type: 'typing', question: '照着敲一敲这一段学过的关键词：', words: ['RECURSION', 'CLASS', 'OBJECT', 'LIST', 'PROJECT', 'LOOP'] },
          { type: 'coding', question: '🚀 编程题 1：写一个递归函数 factorial(n) 返回 n 的阶乘，再调用 factorial(4) 并打印。', starter: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\nprint()', expect: '24' },
          { type: 'coding', question: '🚀 编程题 2：scores = [90, 80, 70]，用 sum 和 len 算平均分（整除）并打印。', starter: 'scores = [90, 80, 70]\nprint()', expect: '80' },
          { type: 'coding', question: '🚀 编程题 3：用 class 造一个会报自己名字的小宠物 Pet，创建 Pet("咪咪") 并让它 say() 打印名字。', starter: 'class Pet:\n    def __init__(self, name):\n        self.name = name\n    def say(self):\n        print(self.name)\np = Pet("")\np.say()', expect: '咪咪' }
        ]
        }
      ]
    },
    {
      title: '🎓 毕业典礼',
      lessons: [
        {
          id: 'grad',
          title: '🎓 毕业啦！你已经是 Python 小学士',
          icon: '🎓',
          kind: 'graduation',
          progress: 5,
          award: { p: 5, title: 'Python小学士', badge: '🎓', desc: '走完全部四段，从“什么是程序”到能写小项目、碰一碰AI。' },
          markdown: '## 🎓 毕业快乐，Python 小学士！\n\n回想第一节课，你连“程序是什么”都不确定；现在——\n\n- 🌱 你懂了程序、变量、数据；\n- 🪄 你会让电脑画图、做判断、管列表；\n- 🔧 你会写函数、读写文件、用算法；\n- 🚀 你做了小游戏、碰了 AI、成了小创客。\n\n### 🌟 学了这些，你能去做什么？\n- **做网站**：用 Python 搭一个属于自己的小网页（比如班级博客）。\n- **玩 AI**：用现成的库，做一个会猜你心情或给图起名的小程序。\n- **自动化**：写脚本帮你整理作业文件夹、记家庭账本、自动背单词。\n- **做游戏**：用 pygame 做一个真正能玩的小游戏，发给朋友炫耀。\n\n### 📚 想继续学，下一步怎么走？\n1. **巩固**：把最喜欢的几节课重做一遍，手感更熟。\n2. **做一个真东西**：挑一个你想做的（小游戏 / 小工具），试着从零写出来。\n3. **学一点点真库**：numpy（算数超快）、pygame（做游戏）、turtle 进阶。\n4. **读好书看教程**：《Python for Kids》《Automate the Boring Stuff》都超友好。\n5. **分享**：把作品发给爸爸妈妈、同学，教他们一行代码——教别人，你学得最牢。\n\n### 📝 毕业考试\n下面有几道小题，还有九道**真编程题**——在网页里写 Python 代码，点“运行”就能看到结果（最后一题还能让小海龟真的画出来）。做完所有题，再点底部「提交本节」，正式戴上 🎓 勋章！',
          exercises: [
            { type: 'choice', question: 'Python 是谁发明的？', options: ['荷兰人 Guido van Rossum', '美国人 Bill Gates', '中国人'], answer: 0, explain: '荷兰人 Guido van Rossum 在 1989 年圣诞假期创造了 Python。' },
            { type: 'choice', question: '想让电脑在屏幕上显示文字，要用哪个命令？', options: ['print', 'input', 'def'], answer: 0, explain: 'print 是 Python 里的“喇叭”，把内容输出到屏幕。' },
            { type: 'fill', question: '把数字 8 存进变量 age，应该写：age = ___（只填数字）', answer: '8', explain: '等号右边是存进去的值，所以写 8。' },
            { type: 'choice', question: 'for i in range(3): 这个循环体会重复执行几次？', options: ['2 次', '3 次', '4 次'], answer: 1, explain: 'range(3) 是 0、1、2，一共 3 次。' },
            { type: 'typing', question: '敲一敲今天的毕业单词：', words: ['GRADUATE', 'PYTHON', 'CREATOR'] },
            { type: 'typing', question: '再敲一敲最常用的命令词，提醒自己：', words: ['PRINT', 'LOOP', 'DEF'] },
            { type: 'coding', question: '🎓 编程题 1：写一个程序，在屏幕上打印出 Python小学士 毕业啦！（只要引号里的内容，不要引号本身）', starter: 'print("")', expect: 'Python小学士 毕业啦！' },
            { type: 'coding', question: '🎓 编程题 2：用 for 循环，把“我会用 Python 创造！”打印 3 次。', starter: 'for i in range(3):\n    print("")', expect: '我会用 Python 创造！' },
            { type: 'coding', question: '🎓 编程题 3：变量与算术。把 a = 12 和 b = 7 的和算出来，打印结果。', starter: 'a = 12\nb = 7\nprint()', expect: '19' },
            { type: 'coding', question: '🎓 编程题 4：列表取值。pets 里放着四种小动物，打印第 3 个（索引 2，也就是方括号里写 2）。', starter: "pets = ['小猫', '小狗', '小兔', '小鱼']\nprint()", expect: '小兔' },
            { type: 'coding', question: '🎓 编程题 5：列表最大值。nums 里有几个数，用 max() 找出最大的那个并打印。', starter: "nums = [4, 9, 2, 7]\nprint()", expect: '9' },
            { type: 'coding', question: '🎓 编程题 6：for 循环累加。用 for 把 1 到 5 加起来，最后打印总和 total。', starter: 'total = 0\nfor i in range(1, 6):\n    total = total + i\nprint()', expect: '15' },
            { type: 'coding', question: '🎓 编程题 7：if 判断。score = 88，如果 score 大于等于 60 就打印“及格”，否则打印“不及格”。', starter: 'score = 88\nif score >= 60:\n    print()\nelse:\n    print()', expect: '及格' },
            { type: 'coding', question: '🎓 编程题 8：写函数。写一个 square(n) 函数返回 n 乘 n，再调用 square(9) 并打印结果。', starter: 'def square(n):\n    return n * n\nprint()', expect: '81' },
            { type: 'coding', question: '🎓 编程题 9：小海龟画图（不用 print）。用 forward 和 left 画一个正方形：向前走 80，左转 90 度，重复 4 次。点运行会看到小海龟真的画出来～', starter: 'forward(80)\nleft(90)\nforward(80)\nleft(90)\nforward(80)\nleft(90)\nforward(80)\nleft(90)' }
          ],
          takeaway: '毕业啦！你从“啥是程序”一路走到能写小项目、还碰了碰 AI，真了不起。正式授予你 🎓 Python小学士！',
          encourage: {
            gentle: '四枚勋章，你一枚都没少，宝贝。这份坚持，比任何代码都珍贵。👏 记住：你不是“学完 Python 的人”，你是“会用 Python 创造的人”。路还长，小光陪你继续走。🌈',
            humor: '四枚勋章全齐了，一枚没丢——这收集率，强迫症都满意！😎 记住喽：你不是“学完 Python 的人”，你是“会用 Python 搞事情的人”。路还长，小光继续陪你浪。🌈',
            strict: '四枚勋章，一枚不少，这点做得漂亮。记住：你不是“学完 Python 的人”，你是“会用 Python 创造的人”。路还长，别躺平，小光陪你继续走。🌈',
          },
        }
      ]
    }
  ]
};
