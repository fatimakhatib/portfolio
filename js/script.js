// var typed = new Typed('.typing',{
//     Strings:['Graphic Desinger','UI / UX Desinger','Web Developer','Flutter Developer'],
//     typeSpeed : 100,
//     BackSpeed:60,
//     loop:true
// })

const nav = document.querySelector('.nav'),
        navList=nav.querySelectorAll('li') ,
        totalNavList = navList.length,

        allSection=document.querySelectorAll('.section'),
        totalSection=allSection.length,
        
        portfolio = document.querySelectorAll('.portfolio-box'),
        totalPortfolio=portfolio.length,
        portfolioMain = document.querySelectorAll('.portfolio-main'),
        totalPortfolioMain=portfolioMain.length,
        portfolioItemList=document.querySelectorAll('.portfolio-item') ,
        totalPortfolioItem = portfolioItemList.length,
        portfolioIconBackList=document.querySelectorAll('.fa.fa-arrow-left') ,
        totalPortfolioIconBackList= portfolioIconBackList.length;

        for (let i = 0; i < totalNavList ; i++)
        {
            const a = navList[i].querySelector('a');
            a.addEventListener('click',function()
            {
                removeBackSection();
                for(let j = 0; j < totalNavList ; j++)
                {
                    if(navList[j].querySelector('a').classList.contains('active'))
                    {
                        addBackSection(j);
                    }
                    navList[j].querySelector('a').classList.remove('active');
                }
                this.classList.add('active');
                showSection(this);
                if(window.innerWidth < 1200) {
                    asideSectionTogglerBtn();
                }
            })
        }
        function showSection(element)
        {
            const target =element.getAttribute('href').split('#')[1];
            for(let i = 0; i < totalSection ; i++)
                {
                    allSection[i].classList.remove('active');
                    
                }
            document.querySelector('#'+target).classList.add('active');
            if(target==='portfolio')
            {
                for(let i = 0; i < totalPortfolio ; i++)
                {
                    portfolio[i].classList.remove('portfolio-show');
                }
                document.querySelector('.portfolio-main').classList.add('portfolio-show');
            }
        }
        function addBackSection(num)
        {
            allSection[num].classList.add('back-section');
        }
        function removeBackSection()
        {
            for(let i = 0; i < totalSection ; i++)
                {
                    allSection[i].classList.remove('back-section');
                }
        }
        function updateNav(element) 
        {
            for(let i = 0; i < totalNavList ; i++)
                {
                    navList[i].querySelector('a').classList.remove('active');
                    const target =element.getAttribute('href').split('#')[1];
                    if(target ===navList[i].querySelector('a').getAttribute('href').split('#')[1])
                    {
                        navList[i].querySelector('a').classList.add('active');
                    }    
                }
        }
        document.querySelector('.hire-me').addEventListener('click',function()
        {
            const sectionIndex = this.getAttribute('data-section-index');
            showSection(this);
            updateNav(this);
            removeBackSection();
            addBackSection(sectionIndex);
        })
        const navTogglerBtn = document.querySelector('.nav-toggler'),
                aside = document.querySelector('.aside');
                navTogglerBtn.addEventListener('click',() => {
                    asideSectionTogglerBtn();
                })
                function asideSectionTogglerBtn(){
                    aside.classList.toggle('open');
                    navTogglerBtn.classList.toggle('open');
                    for(let i = 0; i < totalSection ; i++)
                    {
                        allSection[i].classList.toggle('open');
                    }
                }


                for (let i = 0; i < totalPortfolioItem ; i++)
                {
                    const a = portfolioItemList[i];
                    a.addEventListener('click',function()
                    {
                        target=this.getAttribute('data-section-index');
                        for(let i = 0; i < totalPortfolio ; i++)
                            {
                                portfolio[i].classList.remove('portfolio-show');
                            }
                        document.querySelector('#'+target).classList.add('portfolio-show');
                    })
                }
                for (let i = 0; i < totalPortfolioIconBackList ; i++)
                {
                    const a = portfolioIconBackList[i];
                    a.addEventListener('click',function()
                    {
                        for(let j = 0; j < totalPortfolio ; j++)
                        {
                            portfolio[j].classList.remove('portfolio-show');
                        }
                        for(let j = 0; j < totalPortfolioMain ; j++)
                        {
                            portfolioMain[j].classList.add('portfolio-show');
                        }
                    })
                }