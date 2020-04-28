export function log($log) {
    console.log($log);
}

export function tabs($elt, $index) {
    document.querySelectorAll('.tabs .items .item').forEach((item, index) => {
        if (index == $index)
            item.classList.add('selected');
        else
            item.classList.remove('selected');
    });
    document.querySelectorAll('.tabs .content .item').forEach((item, index) => {
        if (index == $index)
            item.classList.remove('hide');
        else
            item.classList.add('hide');
    });
}

export function dropdownButton($elt) {
    $elt.classList.toggle('opened');
}

export function switchButton($value, $parent) {
    if ($value == 0)
        $parent.classList.remove('on');
    else
        $parent.classList.add('on');
}
export function scrollpage(heightWindow, heightApp) {
    let $positionWindow = document.documentElement.scrollTop;
    document.querySelector('.progress-bar span').style.width = ($positionWindow / (heightApp - heightWindow)) * 100 + '%';
}

export function sticky(heightWindow, positionStickyTop, heightSticky) {
    let $positionWindow = document.documentElement.scrollTop;
    if ($positionWindow >= positionStickyTop) {
        document.querySelector('.sticky').classList.add('active');
        document.body.style.paddingTop = heightSticky + "px";
    }
    else {
        document.querySelector('.sticky').classList.remove('active');
        document.body.style.paddingTop = 0;
    }
}

export function parallax($pageY, $class, $speed, $offset, $position = 'center') {
    let ypos = 0;
    let start = $pageY - $offset;
    ypos = start *= -$speed;
    document.querySelector("." + $class).style.backgroundPosition = $position + " " + ypos + "px";
}