import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { HackathonImagesService } from './hackathon_images.service';
import { CreateHackathonImageDto } from './dto/create-hackathon_image.dto';
import { UpdateHackathonImageDto } from './dto/update-hackathon_image.dto';
import { query } from 'express';

@Controller('hackathon-images')
export class HackathonImagesController {
  constructor(private readonly hackathonImagesService: HackathonImagesService) {}


  @Get('/get-images')
  async getImages(@Query() query) {
    return  [
      "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/74de5c0d-00c3-46a7-af48-98c06fb01be7.png",
      "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/9cf7ae3a-ced0-4e4a-a1b0-4afa602cb17d.png",
      "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/7e2fa1d4-339a-48f3-a8c3-d0029c70a5fa.png",
      "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/09a6c5cc-bb04-4b83-87cb-3a33b64e1850.png",
      "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/ecb405f8-31d7-4b34-8b36-7de566cd5656.png",
      "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/4c160c3b-1868-4b11-bd76-817716fcc069.png"
    ]
  }
}
