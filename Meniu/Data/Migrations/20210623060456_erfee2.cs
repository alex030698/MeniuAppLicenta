using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Meniu.Data.Migrations
{
    public partial class erfee2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Orderr",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    orderNo = table.Column<int>(nullable: false),
                    oderDate = table.Column<DateTime>(nullable: false),
                    price = table.Column<float>(nullable: false),
                    waittingTime = table.Column<int>(nullable: false),
                    paid = table.Column<bool>(nullable: false),
                    served = table.Column<bool>(nullable: false),
                    comment = table.Column<string>(nullable: true),
                    table = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orderr", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orderr");
        }
    }
}
