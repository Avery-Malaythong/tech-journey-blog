import Link from 'next/link'
import Date from '@/components/Date'

import {getSortedPostsData} from '@/lib/posts'
import Image from "next/image";

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

// Change this url to change the image!
const imageUrl = 'https://unsplash.com/photos/deaqEVtdSgk';
const imageKey = imageUrl.split('/').at(-1);

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
      <div>
        <section>
          <p className={'prose'}>
            Greatings ____. I am L!l!th, welcome to the !@#$$#$%. I am glad to guid you. Please look at all the files of the missing people and %%$^@&#.  
          </p>
          <div className={'my-4'}>
            <i>
              %%$^@&#{' '}
              <button className={'btn btn-primary'}>
                <Link href={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2737f3e54f0539776dafeadbe09&tbnid=0pT0SxYHRdN0CM&vet=12ahUKEwjM3u_yip6AAxVTPd4AHYTfBT0QMygPegUIARCHAg..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F2LG4DMEl0hu26HNQMYjr6U%3Fautoplay%3Dtrue&docid=H9jhHX_tehn6MM&w=640&h=640&q=mandela%20catalogue%20&ved=2ahUKEwjM3u_yip6AAxVTPd4AHYTfBT0QMygPegUIARCHAg&safe=active&ssui=on#imgrc=0pT0SxYHRdN0CM&imgdii=ZMEtB0EPvJO1WM'}>
                  <span className={'text-primary-content'}>
                    here
                  </span>
                </Link>
              </button>
            </i>
          </div>
        </section>

        <div className={'my-4'}>
          <Image className={'rounded'} src={`https://source.unsplash.com/${imageKey}`} alt={'My Image'} width={500}
                 height={500}/>
        </div>

        <section className={'prose'}>
          <h2>Files.</h2>
          <ul>
            {allPostsData.map(({id, date, title}) => (
                <li key={id}>
                  <div>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br/>
                    <small>
                      <Date dateString={date}/>
                    </small>
                  </div>
                </li>
            ))}
          </ul>
        </section>
      </div>
  )
}
